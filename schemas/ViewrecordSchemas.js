var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 观影记录&文章收藏模型 
var ViewrecordSchema = new Schema({
	// 用户名
	username: String,
	//----------------------
	// 电影id
	filmid: String,
	// 评分
	rating: Number,
	// 标记状态
	rtype: Number,
	// 用户影评
	comment: String,
	// 电影信息
	filminfo: Object,
	// 创建时间
	create_time: String,
	//-----------------------
	// 类型：收藏
	type: String,
	// 文章id
	aid: Number,
	// 文章类型
	atype: String,
	// 文章信息
	articleinfo: Object,
	// 用户影评
	comments: Object,
});

module.exports = ViewrecordSchema;