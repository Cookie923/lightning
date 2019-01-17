var express = require('express');
var router = express.Router();

var moment = require('moment');
//引入model
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Collection = require('../models/Collection.js');

var responseData;

router.use(function (req, res, next) {
  responseData = {
    code: 0,
    type: '',
    message: ''
  };
  next();
});

/* 查询是否收藏过 */
router.get('/article/inquire', function(req, res){
  var username = req.query.username;
  var aid = req.query.aid;

  Collection.findOne({
    username: username,
    aid: aid
  },function(err, doc){
    if(doc){
      responseData.code = 1;
      responseData.message = '这篇文章收藏过啦！';
      res.json(responseData);
      return;
    }
    responseData.code = 0;
    responseData.message = '这篇文章还没有收藏过哟！';
    res.json(responseData);
    return;
  });
});

/* 添加收藏 */
router.post('/article/collection', function(req, res){
  var username = req.body.username;
  var atype = req.body.atype;
  var aid = req.body.aid;
  var articleinfo = req.body.articleinfo;

  var collection = new Collection({
    username: username,
    aid: aid,
    atype: atype,
    articleinfo: articleinfo,
    comments: '',
    create_time: moment().format('YYYY-MM-DD HH:mm')
  });
  collection.save();
  responseData.code = 1;
  responseData.type = atype;
  responseData.message = '已成功添加收藏！'
  res.json(responseData);
  return;
});

/* 取消收藏 */
router.post('/article/cancel', function(req, res){
  var username = req.body.username;
  var aid = req.body.aid;

  Collection.deleteOne({
    username: username,
    aid:aid
  },function(err, doc){
    if(doc){
      responseData.code = 2;
      responseData.message = '已取消收藏！';
      res.json(responseData);
      return;
    };
  });
});

module.exports = router;