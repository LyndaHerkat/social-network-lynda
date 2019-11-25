const router = require('express').Router();
const dbTools = require('../../my_modules/db');
const ObjectID = require('mongodb').ObjectID;


router.post('/', (req, res) => {
    console.log('Création comment req.body', req.body);
    
    dbTools.connectClientMongo(dbTools.URI, {
        useNewUrlParser: true
    }, err => {
        if (err) {
            console.log('Création post : Impossible de se connecter au client Mongo');
            next(err);
        } else {
            const myDb = dbTools.getClientMongo().db('social-network');
            const myCollection = myDb.collection('posts');
            
            myCollection.findOneAndUpdate(
              {
                '_id' : ObjectID(req.body.postId)
              },
              {
                $push: {
                  commentsArray: req.body
                }
              },
                (err, result) => {
                  if ( err ) {
                    console.log('Mise à jour du profile : erreur lors de la connection au client Mongo');
                        next(err);
                      } else {
                        myCollection.find({
                            user_id: req.body.userId
                          } , {
                            sort :{
                              date: 1
                            }
                          }).toArray(( err, updatedPostArray ) => {
                            if (err) {
                              console.log('Connexion : erreur lors de la connection au client Mongo');
                              console.log(err);
                              res.status(500).json('erreur');
                            } else {
                              console.log('TCL: updatedPostArray after adding comment', updatedPostArray);
                            res.status(200).json(updatedPostArray);
                          }
                        });
                    }
                });
        }
    });

    // res.json('demande de création post reçue');
});

module.exports = router;