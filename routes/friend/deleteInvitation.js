const router = require('express').Router();
const dbTools = require('../../my_modules/db');
const ObjectID = require('mongodb').ObjectID;

router.put('/', (req, res) => {
    console.log('supression invitation', req.body);
    let invitationId = req.body.invitationId;
    console.log('TCL: invitationId', invitationId);
    let currentUserId = req.body.currentUserId;
    console.log('TCL: currentUserId', currentUserId);

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
                    invitations: invitationId,
                }
            },
            { returnOriginal: false },
            (err, currentUserUpdated) => {
                if (err) {
                    console.log('Connexion : erreur lors de la connection au client Mongo');
                    res.status(500).json('impossible de se connecter à la base de données');
                } else {
                    myCollection.findOneAndUpdate({
                        _id: ObjectID(invitationId)
                    }, {
                        $pull: {
                            requests: currentUserId
                        }
                    },
                    { returnOriginal: false },
                    (err, invitationUserUpdated) => {
                        if (err) {
                            console.log('Connexion : erreur lors de la connection au client Mongo');
                            res.status(500).json('impossible de se connecter à la base de données');
                        } else {
                            let response = {
                            currentUserUpdated: currentUserUpdated.value,
                            invitationUserUpdated: invitationUserUpdated.value
                            }
                            console.log('TCL: response invitation', response);
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
