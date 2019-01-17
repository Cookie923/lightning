var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 我的收藏模型
var CollectionSchema = new Schema({
	// 用户名
	username: String,
	// 文章id
	aid: Number,
	// 文章类型
	atype: String,
	// 文章信息
	articleinfo: Object,
	// 用户影评
	comments: Object,
	// 创建时间
	create_time: String
});

module.exports = CollectionSchema;