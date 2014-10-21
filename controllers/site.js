/**
 *
 * site
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-13
 * @update 2014-10-13
 */

var util = require('../util');
var config = require('../config');

var User = require('../service').User;
var Tweet = require('../service').Tweet;

exports.index = function (req, res, next) {

  var tweet_list = [];

  Tweet.getAllTweet(function (err, tweets) {
    if (err) return next(err);

    tweet_list = tweets.reverse();

    res.render('index', {
      title: 'Riki',
      user: req.session.user ? req.session.user.name : '',
      tweets: tweet_list
    });
  });

};