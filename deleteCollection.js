var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers2").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});