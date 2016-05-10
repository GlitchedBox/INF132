/**
 * Created by huyanh on 2016. 5. 10..
 */
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://128.195.54.50/GroupBDB';

var findRestaurants = function(db, callback) {
    var cursor =db.collection('doctor').find( );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {
            console.dir(doc);
        } else {
            callback();
        }
    });
};

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findRestaurants(db, function() {
        db.close();
    });
});