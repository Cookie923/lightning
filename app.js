var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
//引入数据库
var mongoose = require('./config/mongoose');
var db = mongoose();
//引入Cookies
var Cookies = require('cookies');
//引入登录模块
var login = require('./routes/login');
//首页
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//将express默认的js模板引擎jade，改为ejs
// app.set('view engine', 'jade');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//设置Cookies
app.use(function (req, res ,next) {
	//创建cookies对象
	req.cookies = new Cookies(req,res);
	//解析登录用户的cookies信息
	if(req.cookies.get('userInfo')){
		try{
			req.userInfo = JSON.parse(req.cookies.get('userInfo'));
		}catch(e){
			next();
		}
	}
	next();
})

app.use('/', indexRouter);
//注册函数：登录模块
app.use(login.post);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.render('error.jade');
});

module.exports = app;
