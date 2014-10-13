/**
 *
 * routes.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-13
 * @update 2014-10-13
 */

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.render('index', { title: 'Riki' });
  });
};