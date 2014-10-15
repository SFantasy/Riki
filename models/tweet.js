/**
 *
 * tweet
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-10-14
 * @update 2014-10-15
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var TweetSchema = new Schema({
  content: { type: String },
  author_id: { type: ObjectId },
  create_at: { type: Date, default: Date.now }
});

TweetSchema.index({ create_at: -1 });

mongoose.model('Tweet', TweetSchema);
