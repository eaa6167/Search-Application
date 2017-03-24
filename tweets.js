

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;


var DBUrl = 'mongodb://localhost:27017/users';
var CollectionUrl = 'mongodb://localhost:27017/users/tweets_sandy';



var findTweets = function(db, callback) {
    var cursor =db.collection('tweets_sandy').find(
       // {"fromUser":"barbaratalia"});
       {createdAt: /.+30 Oct 2012 23:2[0-5]/}, 
       {text:1, _id:0});
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

console.log('Tweets :');
findTweets(db, function() {
     db.close();
   });
});


