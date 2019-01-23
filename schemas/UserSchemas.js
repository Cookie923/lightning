var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//用户collection结构
var UserSchema = new Schema({
	//用户名
	username: String,
	//密码
	password: String,
	//打卡日期
	checkin: Array,
});

module.exports = UserSchema;