/**
 *
 * user
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-13
 * @update 2014-10-13
 */

// module dependencies

var xss = require('xss');
var crypto = require('crypto');

var User = require('../service').User;

// register

exports.showRegister = function (req, res, next) {

  res.render('user/register');

};

exports.register = function (req, res, next) {

  var name = xss(req.param('name'));
  var password = xss(req.param('password'));
  var re_pass = xss(req.param('re_password'));

  User.getUserByQuery(name, function (err, user) {
    if (err) return next(err);

    if (user.length > 0) {
      res.render('user/register', { error: 'User has been register', name: name });
      return;
    }

    password = md5(password);

    User.newAndSave(name, password, function (err) {
      if (err) return next(err);

      return res.render('user/login', {
        success: 'Welcome to join Riki, you can login now'
      });
    });
  });

};

// login

exports.showLogin = function (req, res, next) {

  res.render('user/login');

};

function md5(str) {
  var md5sum = crypto.createHash('md5');

  md5sum.update(str);
  str = md5sum.digest('hex');
  return str;
}