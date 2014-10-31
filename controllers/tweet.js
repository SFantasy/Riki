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

  if (content.length === 0) {
    return res.render('/', {
      error: 'Tweet cannot be empty'
    });
  }

  Tweet.newAndSave(content, req.session.user._id, req.session.user.name, function (err, topic) {
    if (err) return next(err);

    res.redirect('/');
  });
};