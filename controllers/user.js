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

var config = require('../config');

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

exports.login = function (req, res, next) {

  var name = req.param('name');
  var password = req.param('password');

  password = md5(password);

  User.getUserByQuery(name, function (err, user) {
    if (err) return next(err);
    if (!user) return res.render('user/login', { error: 'User not exists.' });

    var u = user[0];

    if (password != u.password) return res.render('user/login', { error: 'Wrong password' });

    gen_session(u, res);

    res.redirect('/');

  });
};

function gen_session(user, res) {
  var auth_token = encrypt(user._id + '\t' + user.name + '\t' + user.pass, config.session_secret);
  res.cookie(config.cookie_name, auth_token, {
    path: '/',
    maxAge: 1000 * 60 * 60 * 30
  });
}

function md5(str) {
  var md5sum = crypto.createHash('md5');

  md5sum.update(str);
  str = md5sum.digest('hex');
  return str;
}

function encrypt(str, secret) {
  var cipher = crypto.createCipher('aes192', secret);
  var enc = cipher.update(str, 'utf8', 'hex');
  enc += cipher.final('hex');
  return enc;
}

function decrypt(str, secret) {
  var decipher = crypto.createDecipher('aes192', secret);
  var dec = decipher.update(str, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
}