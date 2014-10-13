/**
 *
 * routes.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-13
 * @update 2014-10-13
 */

var site = require('./controllers/site');
var user = require('./controllers/user');

module.exports = function (app) {

  app.get('/', site.index);

  app.get('/register', user.showRegister);
  app.post('/register', user.register);

  app.get('/login', user.showLogin);

};