const router = require('express').Router();
const dbTools = require('../../my_modules/db');

router.post('/', (req, res) => {
    console.log('Création post', req.body);
    

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
                    res.status(200).json('insertion message Ok');
                }
            });
        }
    });

    // res.json('demande de création post reçue');
});

module.exports = router;