var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//评论collection结构
var CommentsSchema = new Schema({
	//动态的用户名
	username: String,
	//发布者
	publisher: String,
	//评论来源类型
	source_type: String,
	//影讯id
	aid: String,
	//动态中的电影id
	filmid: String,
	//评论内容
	content: String,
	//创建时间
	create_time: String
});

module.exports = CommentsSchema;