const router = require('express').Router();
const dbTools = require('../../my_modules/db');
const ObjectID = require('mongodb').ObjectID;

router.put('/', (req, res) => {
    console.log('acceptation d\'invitation');

    dbTools.connectClientMongo(dbTools.URI, {
        useNewUrlParser: true
    }, err => {
        if (err) {
            console.log('Accepter invitation : Impossible de se connecter au client Mongo');
            next(err);
        } else {
            const myDb = dbTools.getClientMongo().db('social-network');
            const myCollection = myDb.collection('users');

            myCollection.findOneAndUpdate({
                _id: ObjectID(req.body.currentUserId)
            }, {
                $pull: {
                    requests: req.body.friendUserId,
                    invitations: req.body.friendUserId,
                },
                $push: {
                    friends: req.body.friendUserId
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
                        $pull: {
                            invitations: req.body.currentUserId,
                            requests: req.body.currentUserId
                        },
                        $push: {
                            friends: req.body.currentUserId
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
                    });
                }
            });
        }
    });
    // res.json('demande inviation reçue');
});

module.exports = router;
