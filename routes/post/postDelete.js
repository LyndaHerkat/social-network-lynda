const router = require('express').Router();
const dbTools = require('../../my_modules/db');
const ObjectID = require('mongodb').ObjectID;

router.delete('/', (req, res) => {
  console.log('supression ami req.params', req.query);
  let userId = req.query.userId;
  let postId = req.query.postId;

  dbTools.connectClientMongo(dbTools.URI, {
    useNewUrlParser: true
  }, err => {
    if (err) {
      console.log('Suppression post : Impossible de se connecter au client Mongo');
      next(err);
    } else {
      const myDb = dbTools.getClientMongo().db('social-network');
      const myCollection = myDb.collection('posts');

      myCollection.deleteOne({
        _id: ObjectID(postId)
      }, (err, result) => {
        if (err) {
          console.log('Connexion : erreur lors de la connection au client Mongo');
          res.status(500).json('impossible de se connecter à la base de données');
        } else {
          myCollection.find({
            user_id: userId
          }, {
            sort: {
              date: -1
            }
          }).toArray((err, updatedPostArray) => {
            console.log('TCL: updatedPostArray Delete', updatedPostArray);
            res.status(200).json(updatedPostArray);
          })
        }
      });
    }
  });

  // dbTools.connectClientMongo(dbTools.URI, {
  //     useNewUrlParser: true
  // }, err => {
  //     if (err) {
  //         console.log('Accepter invitation : Impossible de se connecter au client Mongo');
  //         next(err);
  //     } else {
  //         res.status(200).json('supression post OK')
  //     }

  // });
});

module.exports = router;