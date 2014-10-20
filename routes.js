/**
 *
 * routes.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-13
 * @update 2014-10-15
 */

var site = require('./controllers/site');
var user = require('./controllers/user');
var tweet = require('./controllers/tweet');

module.exports = function (app) {

  // home page
  app.get('/', site.index);

  // user related
  app.get('/register', user.showRegister);
  app.post('/register', user.register);

  app.get('/login', user.showLogin);
  app.post('/login', user.login);

  app.get('/logout', user.logout);

  //
  app.post('/tweet', tweet.newTweet);

};