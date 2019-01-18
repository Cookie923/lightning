var createError = require('http-errors');
var express = require('express');
var path = require('path');
//模板自带引入cookie-parser模块
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 代理转发
var proxy = require('http-proxy-middleware');
var timesOptions = {
	target: 'http://m.mtime.cn/Service/callback.mi/News/',
	changeOrigin: true,
	ws: true,
	pathRewrite: {
		'^/news': '/'
	}
};
var doubanOptions = {
	target: 'http://api.douban.com/v2',
	changeOrigin: true,
	ws: true,
	pathRewrite: {
		'^/api': ''
	}
};
var timesProxy = proxy(timesOptions);
var doubanProxy = proxy(doubanOptions);

//引入数据库
var mongoose = require('./config/mongoose');
var db = mongoose();

//引入登录模块
var login = require('./routes/login');
//引入电影详情页观影记录模块
var viewrecord = require('./routes/viewrecord');
//引入用户中心观影记录模块
var accountrecord = require('./routes/account-record');
//引入用户中心我的收藏模块
var accountcollection = require('./routes/account-collection');
//引入收藏模块
var collection = require('./routes/collection');
//引入动态模块
var dynamic = require('./routes/dynamic');
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

//第三方接口转发
app.use('/api', doubanProxy);
app.use('/news', timesProxy);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//注册函数：登录模块
app.use('/',login);
//电影详情页观影记录模块
app.use('/',viewrecord);
//用户中心观影记录模块
app.use('/',accountrecord);
//用户中心我的收藏模块
app.use('/',accountcollection);
//文章收藏模块
app.use('/',collection);
//用户动态模块
app.use('/',dynamic);

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
