/**
 *
 * tweet
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-15
 * @update 2014-10-15
 */

var Tweet = require('../service').Tweet;

exports.newTweet = function (req, res, next) {

  var content = req.body.content;

  Tweet.newAndSave(content, req.session.user._id, function (err, topic) {
    if (err) return next(err);

    res.redirect('/');
  });
};