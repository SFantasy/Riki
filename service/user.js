/**
 *
 * user
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-13
 * @update 2014-10-13
 */

var models = require('../models');
var User = models.User;

exports.getUserByQuery = function (name, callback) {

  User.find({ name: name }, callback);

};

exports.newAndSave = function (name, password, callback) {

  var user = new User();

  user.name = name;
  user.password = password;

  user.save(callback);

};
