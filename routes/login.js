const router = require('express').Router();
const dbTools = require('../my_modules/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
var path = require('path');

// recuperation de la cle privee
const private_key = fs.readFileSync('../RSA/key');// reafileSync prend en parametre le path en fontion de l'endroit ou est lance le serveur (pas de chemin relatif)

router.post('/', (req, res) => {
    console.log('Connexion', req.body);

    dbTools.connectClientMongo(dbTools.URI, {
        useNewUrlParser: true
    }, err => {
        if (err) {
            console.log('Inscription : Impossible de se connecter au client Mongo');
            next(err);
        } else {
            const myDb = dbTools.getClientMongo().db('social-network');
            const myCollection = myDb.collection('users');

            //vérification de la presence de l'adresse mail dans la bdd
            myCollection.findOne({
                email: req.body.email,
            }, (err, data) => {
                if (err) {
                    console.log('Connexion : erreur lors de la connection au client Mongo');
                    next(err);
                } else {
                    // on compare le pwd recu avec le pwd decrypte
                    if (data !== null && bcrypt.compareSync(req.body.password, data.password)) {
                        // creation du token
                        const token = jwt.sign({}, private_key, {
                            algorithm: 'RS256',
                            subject: data._id.toString()
                        });
                        // envoi du token
                        res.status(200).json(token);
                    } else {
                        console.log('Connexion :  ce compte n\'existe pas ');
                        res.status(401);
                    }
                }
            });
        }
    });

});

module.exports = router;