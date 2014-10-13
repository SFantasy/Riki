/**
 *
 * User
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-13
 * @update 2014-10-13
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String },
  password: { type: String }
});

UserSchema.index({
  name: 1,
  unique: true
});

mongoose.model('User', UserSchema);