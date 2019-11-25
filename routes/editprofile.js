const router = require('express').Router();
const dbTools = require('../my_modules/db');
const bcrypt = require('bcrypt');
const ObjectID = require('mongodb').ObjectID;
const path = require('path');

router.post('/', (req, res) => {
    dbTools.connectClientMongo(dbTools.URI, {
        useNewUrlParser: true
    }, err => {
        if (err) {
            console.log('Inscription : Impossible de se connecter au client Mongo');
            next(err);
        } else {
            const myDb = dbTools.getClientMongo().db('social-network');
            const myCollection = myDb.collection('users');


            myCollection.findOneAndUpdate(
                {
                    '_id': ObjectID(req.body['_id'])
                }, {
                    $set: {
                        name: req.body.name,
                        pseudo: req.body.pseudo,
                        email: req.body.email,
                        birth: req.body.birth,
                        sexe: req.body.sexe,
                        grade: req.body.grade
                    }
                }, {
                    returnOriginal: false
                },
                (err, updatedUser) => {
                    if (err) {
                        console.log('Mise à jour du profile : erreur lors de la connection au client Mongo');
                        next(err);
                    } else {
                        if (updatedUser === null) {
                            console.log('cet identifiant d\'utilisateur n\'existe pas');
                            res.status(500).json('cet identifuant d\'utilisateur n\'existe pas');
                        } else {
                            // Récupération de tous les users
                            myCollection.find({}).toArray( (err, updatedAllUserArray) => {
                                if (err) {
                                    console.log('TCL: err', err);
                                    console.log('Impossible de récuperer tous les users');
                                } else {
                                    let response = {
                                        updatedUser: updatedUser,
                                        updatedAllUserArray: updatedAllUserArray
                                    }
                                    res.status(200).json(response);
                                }
                            }); 
                            
                            // (err, result) => {
                            //     if (err) {
                            //         console.log('TCL: err', err);
                            //         console.log('Impossible d\'insérer le nouveau user dans la bdd');
                            //     } else {

                            //         myCollection.findOne({
                            //             '_id': ObjectID(req.body['_id'])
                            //         }, (err, data) => {
                            //             if (err) {
                            //                 console.log(err);
                            //             } else {
                            //                 let updatedUser = data;
                            //                 delete updatedUser.password;
                            //                 res.status(200).json(updatedUser);
                            //             }
                            //         });
                            //         // console.log('TCL: result', result);
                            //     }
                            // });
                        }
                    }
                });
        }
    });

});

module.exports = router;



//     newUser.admin = false;
//     newUser.friends = null;
//     newUser.invitations = null;
//     newUser.requests = null;
//     newUser.avatar = "../../../../assets/img/default_avatar.png";
// delete updatedUser.confirmPassword;
//cryptage du mot de passe avant enregistrement dans la bdd
// updatedUser.password = bcrypt.hashSync(updatedUser.password, bcrypt.genSaltSync(10));