var express = require("express");
var app     = express();
var path    = require("path");

//Connecting to MySQL which has website comments
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'momkai',
  database : 'comments'
});

var firstComment = 1;
var lastComment = 101;

//Parsing MySQL with the FOR-loop
var lupus = require('lupus');
lupus(firstComment, lastComment, function(i) {
  //Asking for a comment from MySQL
  connection.query('SELECT * FROM `_comment` WHERE `id` ='+i, function (error, results, fields) {
      if (error) {
        throw error
      }
    var commentText = results[0].text;
    var commentJSON = JSON.stringify({"text":commentText});
    var commentJSON1 = JSON.parse(commentJSON);

    //Sending comment to API
    var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

    var tone_analyzer = new ToneAnalyzerV3({
      username: "d1ec86a6-4402-483b-adce-da206ed905e4",
      password: "TKaEEDa6QOnS",
      version_date: "2017-09-21"
    });

    var params = {
      text: commentJSON1.text,
      tones: 'emotion'
    };

    //Getting JSON-response
    tone_analyzer.tone(params, function(err, res) {

      if (err) {
        console.log('error:', error);
      }

      else {
        //console.log(res.document_tone);
        if (res.document_tone.tones.length >= 1) {
          //console.log (res.document_tone.tones);

          //Picks the highest score for scoreData
          var scoreDataArr = [];
          lupus(0, res.document_tone.tones.length, function(x) {
          scoreDataArr[x] = res.document_tone.tones[x].score;
          scoreDataArr.push(scoreDataArr[x]);
          //console.log(scoreDataArr);
          //Picks the MAX score
          }, function MAX () {
            var max = Math.max.apply(null, scoreDataArr);
            //console.log(max);

            //Find the tone value accroding to the MAX score
            lupus(0,res.document_tone.tones.length, function(x) {
              if (res.document_tone.tones[x].score == max) {
                var emotionData = res.document_tone.tones[x].tone_id;
                var scoreData = max;
                //console.log(emotionData, max);

                //Putting all data in one JSON
                var emotionDataJSON = ({"id":i,"text":commentText,"tone":emotionData, "score":scoreData});
                //console.log(emotionDataJSON);

                //Sending all-data-JSON to MLab database
                const MongoClient = require('mongodb').MongoClient;
                const MONGO_URL = 'mongodb://andrewurodov:momkai@ds243285.mlab.com:43285/commentemotions';

                MongoClient.connect(MONGO_URL, (err, db) => {
                if (err) {
                  return console.log(err);
                }
                // Insert in DATABASE
                db.collection('test').insert(emotionDataJSON, function (err, res) {
                    if (err) {
                      db.close();
                      return console.log(err);
                    }
                    // Success
                    db.close();
                    console.log('Data for id:' + i +' was sent');
                  });
                });
              }
            });
          });
        }
      }
    });
  });
}, function DONE (error) {
  if (error) throw error;
  else {
    connection.end();

    //Serving HTML-file on port 3000
    app.use('/', express.static(__dirname + '/front-end/'));
    app.get('/valuablecomments',function(req,res){
      res.sendFile(__dirname+'/front-end/index.html');
    });

    app.listen(3000);
    console.log("Valuable comments run at Port 3000");
  }
});
