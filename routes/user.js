const router = require('express').Router();
const dbTools = require('../my_modules/db');
const fs = require('fs');
const path = require('path');
const jwt = require ('jsonwebtoken');
const objectId = require('mongodb').ObjectID;

// RECUPERATION de la cle publique
const public_key = fs.readFileSync(path.resolve(__dirname, "../RSA/key.pub"));// reafileSync prend en parametre le path en fontion de l'endroit ou est lance le serveur (pas de chemin relatif)


function isUserLogged (req, res, next){
    // console.log('function isUserLogged ', req.headers);
    const token = req.headers.jwttoken;

    if (token) {
      console.log('TOken OK');
        jwt.verify(token, public_key, (err, decoded) => {
            if (err) {
                res.status(401).json('token invalide');
            } else {
                const userID = decoded.sub; // recuparation de l'ID du user dans le token
                console.log('userID : ', userID);
                dbTools.connectClientMongo(dbTools.URI, {
                    useNewUrlParser: true
                }, err => {
                    if (err) {
                        console.log('Inscription : Impossible de se connecter au client Mongo');
                        next(err);
                    } else {
                        const myDb = dbTools.getClientMongo().db('social-network');
                        const myCollection = myDb.collection('users');
                        // Recherche du user dans la bdd en fonction de l'ID du user recupere dans le token
                        myCollection.findOne({
                            _id: objectId(userID),
                        }, (err, data) => {
                            if (err) {
                                console.log('Connexion : erreur lors de la connection au client Mongo');
                                res.status(401).json('error');
                            } else {
                                console.log('data : ', data);
                                req.user = data;
                                next(); // on passe a l'execution de la route ci-dessous
                            }
                        });
                    }
                });
            }
        });
    } else {
      console.log('TOken KO');
      res.status(401).json('absence de token');
    }
}

router.get('/current', isUserLogged, (req, res) => {
    console.log( 'route /req.user', req.user);
    res.json(req.user);
});

module.exports = router;