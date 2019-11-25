const router = require('express').Router();
const dbTools = require('../../my_modules/db');
const ObjectID = require('mongodb').ObjectID;

router.put('/', (req, res) => {
    console.log('supression ami');
    let friendId = req.body.friendId;
    let currentUserId = req.body.currentUserId;

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
                _id: ObjectID(currentUserId)
            }, {
                $pull: {
                    friends: friendId,
                }
            },
            { returnOriginal: false },
            (err, currentUserUpdated) => {
                if (err) {
                    console.log('Connexion : erreur lors de la connection au client Mongo');
                    res.status(500).json('impossible de se connecter à la base de données');
                } else {
                    myCollection.findOneAndUpdate({
                        _id: ObjectID(friendId)
                    }, {
                        $pull: {
                            friends: currentUserId
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
