var express = require('express');
var router = express.Router();

var moment = require('moment');
//引入model
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var User = require('../models/User.js');

var responseData;

router.use(function (req, res, next) {
  responseData = {
    code: 0,
    type: '',
    data: ''
  };
  next();
});

/* 查询打卡记录 */
router.get('/account/checkin/inquire', function(req,res){
  var username = req.query.username;

  User.findOne({
    username: username
  }, function(err, doc){
    responseData.code = 0;
    responseData.type = '查询用户打卡记录';
    responseData.data = doc;
    res.json(responseData);
    return;
  });
});

/* 用户打卡 */
router.post('/account/checkin', function(req,res){
  var username = req.body.username;
  User.update({
    username: username
  }, {$push:{
    checkin: moment().format('YYYY/MM/DD')
  }},function(err, doc){
    responseData.code = 1;
    responseData.type = '用户打卡';
    responseData.data = doc;
    res.json(responseData);
    return;
  });
});

module.exports = router;