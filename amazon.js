
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var DBUrl = 'mongodb://localhost:27017/users';
var CollectionUrl = 'mongodb://localhost:27017/users/Amazon_Automotive';



var findTweets = function(db, callback) {
    var cursor =db.collection('Amazon_Automotive').find(
        {"reviewerName":"Mike"});
      
    cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.log(doc);
         } else {
           callback();
         }
    });
};


MongoClient.connect(DBUrl, function(err, db) {
   assert.equal(null, err);
   if (err) {
      console.log('Unable to connect to the Server and Database ', err);
      console.log('Unable to connect to the database Collection', err);
   } else {
      console.log('Successfully connected to Server and Database : ', DBUrl);
      console.log('Successfully connected to database Colllection :', CollectionUrl);
   }

findTweets(db, function() {
     db.close();
   });
});


