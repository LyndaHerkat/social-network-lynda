const router = require('express').Router();
const dbTools = require('../../my_modules/db');
const ObjectID = require('mongodb').ObjectID;

router.post('/', (req, res) => {
    console.log('envoi invitaion');


    dbTools.connectClientMongo(dbTools.URI, {
        useNewUrlParser: true
    }, err => {
        if (err) {
            console.log('Création post : Impossible de se connecter au client Mongo');
            next(err);
        } else {
            const myDb = dbTools.getClientMongo().db('social-network');
            const myCollection = myDb.collection('users');

            myCollection.findOne({
                _id: ObjectID(req.body.currentUserId)
            }, (err, currentUser) => {
                if (err) {
                    console.log('Connexion : erreur lors de la connection au client Mongo');
                    res.status(500).json('impossible de se connecter à la base de données');
                } else {
                    if (currentUser.friends.includes(req.body.friendUserId)) {
                        res.status(200).json(1);
                    } else {
                        if (currentUser.requests.includes(req.body.friendUserId)) {
                            res.status(200).json(2);
                        } else {
                            myCollection.findOneAndUpdate({
                                    _id: ObjectID(req.body.currentUserId)
                                }, {
                                    $push: {
                                        requests: req.body.friendUserId
                                    }
                                },
                                { returnOriginal: false },
                                (err, currentUserUpdated) => {
                                    if (err) {
                                        console.log('Connexion : erreur lors de la connection au client Mongo');
                                        res.status(500).json('impossible de se connecter à la base de données');
                                    } else {
                                        myCollection.findOneAndUpdate({
                                            _id: ObjectID(req.body.friendUserId)
                                        }, {
                                            $push: {
                                                invitations: req.body.currentUserId
                                            }
                                        },
                                        { returnOriginal: false },
                                        (err, friendUserUpdated) => {
                                            if (err) {
                                                console.log('Connexion : erreur lors de la connection au client Mongo');
                                                res.status(500).json('impossible de se connecter à la base de données');
                                            } else {
                                                let response = {
                                                    currentUserUpdated: currentUserUpdated.value,
                                                    friendUserUpdated: friendUserUpdated.value
                                                }
                                                res.status(200).json(response);
                                            }
                                        })
                                    }
                                }
                            )
                        }
                    }
                }
            });
        }
    });
    // res.json('demande inviation reçue');
});

module.exports = router;