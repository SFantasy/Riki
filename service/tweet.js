/**
 *
 * tweet
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-15
 * @update 2014-10-15
 */

var models = require('../models');
var Tweet = models.Tweet;

exports.getAllTweet = function (callback) {
  Tweet.find(function (err, tweets) {
    if (err) return callback(err);

    if (tweets.length === 0) return callback(null, []);

    callback(null, tweets);
  });
};

exports.newAndSave = function (content, author_id, callback) {
  var tweet = new Tweet();

  tweet.content = content;
  tweet.author_id = author_id;
  tweet.save(callback);
};