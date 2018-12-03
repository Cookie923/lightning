var express = require('express');
var router = express.Router();

//引入model
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var User = require('../models/User');

//统一返回格式
var responseData;

router.use(function (req, res, next) {
  responseData = {
    code: 0,
    message: ''
  };
  next();
});

//判断是否为空或两次密码时候一致，在前端写逻辑，这里省去。

/* 用户注册 */
router.post('/account/register', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var repassword = req.body.repassword;
  //判断用户名是否已被注册
  User.findOne({
    username: username
  },function (err, doc) {
    if(doc){
      responseData.code = 1;
      responseData.message = '抱歉，用户名已被注册！'
      res.json(responseData);
      return;
    }
    //保存用户注册信息到数据库
    var user = new User({
      username: username,
      password: password
    });
    user.save();
    responseData.code = 2;
    responseData.message = '注册成功！'
    res.json(responseData);
    return;
  });

});


/* 用户登录 */
router.post('/account/login', function(req, res){
  var username = req.body.username;
  var password = req.body.password;
  //判断用户名是否已经注册
  User.findOne({
    username: username,
    password: password
  },function (err, doc) {
    if(doc){
      responseData.code = 2;
      responseData.message = '登录成功！';
      responseData.userInfo = {
        _id: doc._id,
        username: doc.username
      };
      //存入cookies
      req.cookies.set('userInfo',JSON.stringify({
        _id: doc._id,
        username: doc.username
      }));
      res.json(responseData);
      return
    }
    responseData.code = 3;
    responseData.message = '用户名不存在或密码不正确';
    res.json(responseData);
    return;
  });
});

//导出数据
module.exports = router;