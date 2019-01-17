var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 观影记录模型 
var ViewrecordSchema = new Schema({
	// 用户名
	username: String,
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
	create_time: String
});

module.exports = ViewrecordSchema;