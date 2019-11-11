const router = require('express').Router();
const dbTools = require('../../my_modules/db');

router.get('/', (req, res) => {
    console.log('TCL: req.query', req.query);
    console.log('TCL: req.query.userId', req.query.userId);

    dbTools.connectClientMongo(dbTools.URI, {
        useNewUrlParser: true
    }, err => {
        if (err) {
            console.log('Création post : Impossible de se connecter au client Mongo');
            next(err);
        } else {
            const myDb = dbTools.getClientMongo().db('social-network');
            const myCollection = myDb.collection('posts');

            myCollection.find({user_id : req.query.userId}, {sort : {date : -1}}).toArray ((err, documents) => {
                if (err) {
                    console.log('Connexion : erreur lors de la connection au client Mongo');
                    res.status(500).json('impossible de se connecter à la base de données');
                } else {
                    
                    console.log('postGet : documents ', documents)
                    console.log('TCL: req.query.userId', typeof req.query.userId);
                    res.status(200).json(documents);
                }
            });
        }
    });

    // res.json('demande de création post reçue');
});

module.exports = router;