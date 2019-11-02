const router = require('express').Router();
const dbTools = require('../my_modules/db');
const bcrypt = require('bcrypt');

router.post('/', (req, res) => {
    console.log(req.body);
    dbTools.connectClientMongo(dbTools.URI, {
        useNewUrlParser: true
    }, err => {
        if (err) {
            console.log('Inscription : Impossible de se connecter au client Mongo');
            next(err);
        } else {
            const myDb = dbTools.getClientMongo().db('social-network');
            const myCollection = myDb.collection('users');

            //vérification de l'absence de l'adresse mail dans la bdd
            myCollection.findOne({
                email : req.body.email
            }, (err, data) => {
                if(err) {
                    console.log('Inscription : erreur lors de la connection au client Mongo');
                    next(err);
                } else {
                    if(data !== null) {
                        console.log('l\'adress mail existe déjà');
                        res.status(401).json('Cet adresse mail est déjà utilisé');
                    } else {
                      // ajout de proprietes au new user
                      let newUser = req.body;
                      newUser.admin = false;
                      newUser.friends = null;
                      newUser.invitations = null;
                      newUser.requests = null;
                      delete newUser.confirmPassword;
                      //cryptage du mot de passe avant enregistrement dans la bdd
                      newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(10));

                      // Creation d'un nouveau user dans la bdd
                      myCollection.insertOne(newUser, (err, result) => {
                            if(err){
                                console.log('Impossible d\'insérer le nouveau user dans la bdd');
                            } else {
                                console.log('user ajouté');
                                res.status(200).json('inscription OK');
                            }
                        });
                    }
                }
            });
        }
    });

});

module.exports = router;