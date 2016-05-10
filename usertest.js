/**
 * Created by huyanh on 2016. 5. 10..
 */
var MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://128.195.54.50/", function (err, db) {
    if (err) {
        console.log("Connection failed via connection string")
    } else {
        console.log("successfully connected to the database")
        // var adminDB = db.admin()
        // adminDB.listDatabases(function(err, databases) {
        //     console.log("asdfasdfasdf")
        //     console.log(databases)
        // })
        var collection = db.collection('patient')
        console.log("Array:", collection.find().toArray(function(err, docs) {
            console.log(docs)
        }
        ))
    }
    db.close()
    console.log("connection closed")
})