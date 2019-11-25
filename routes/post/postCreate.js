const router = require('express').Router();
const dbTools = require('../../my_modules/db');

router.post('/', (req, res) => {
    console.log('Création post req.body', req.body);
    
    dbTools.connectClientMongo(dbTools.URI, {
        useNewUrlParser: true
    }, err => {
        if (err) {
            console.log('Création post : Impossible de se connecter au client Mongo');
            next(err);
        } else {
            const myDb = dbTools.getClientMongo().db('social-network');
            const myCollection = myDb.collection('posts');

            myCollection.insertOne(req.body, (err, data) => {
                if (err) {
                    console.log('Connexion : erreur lors de la connection au client Mongo');
                    res.status(500).json('impossible de se connecter à la base de données');
                } else {
                    myCollection.find({user_id : req.body.user_id}, { sort : { date : -1}}).toArray((err, updatedPostArray) => {
                    console.log('TCL: updatedPostArray', updatedPostArray);
                       res.status(200).json(updatedPostArray);
                    })
                }
            });
        }
    });

    // res.json('demande de création post reçue');
});

module.exports = router;