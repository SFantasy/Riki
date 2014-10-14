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

exports.index = function (req, res, next) {

  res.render('index', {
    title: 'Riki - Homepage',
    user: req.session.user ? req.session.user.name : ''
  });

};