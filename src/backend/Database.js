var dotenv = require('dotenv');
dotenv.config();

var localhost = process.env.CONNECTION_STRING;
var mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection successful!');

});

var wordSchema = new mongoose.Schema({
  user_email: String,
  word: String,
  thought: String,
  lon: Number,
  lat: Number
});

const DB_operations = {
  newWord: function(email, lon, lat, word, thought) {
    var wordOfDay = new wordSchema(word, wordSchema);
    var wordRecord = new wordOfDay({
      user_email: email,
      word: word,
      thought: thought,
      lon: lon,
      lat: lat
    });
    wordRecord.save(function(err, record) {
      if (err) return console.error(err);
      console.info(record," saved!");
    });
  },
  getOtherThoughtsOn: function(word) {

  }
}
module.exports.DB_operations;
