var express = require('express');
var router = express.Router();

var moment = require('moment');
//引入model
var mongoose = require('mongoose');
const {ObjectId} = require('mongodb')
mongoose.Promise = global.Promise;
var Comment = require('../models/Comment.js');

var responseData;

router.use(function (req, res, next) {
  responseData = {
    code: 0,
    type: '',
    message: '',
    data: []
  };
  next();
});

/* 查询是否有评论 */
router.get('/article/inquire/comments', function(req, res){
  var username = req.query.username;
  var aid = req.query.aid;
  var filmid = req.query.filmid;

  if(aid){
    Comment.find({
      aid: aid
    }).sort({'create_time': 1}).exec(function(err, doc){
      if(doc){
        responseData.code = 0;
        responseData.type = '查询影讯评论';
        responseData.message = '有用户评论过！';
        responseData.data = doc;
        res.json(responseData);
        return;
      }else{
        responseData.code = 0;
        responseData.type = '查询影讯评论';
        responseData.message = '还没有评论过哟！'
        res.json(responseData);
        return;
      }
    });
  }
  if(filmid){
    Comment.find({
      username: username,
      filmid: filmid
    }).sort({'create_time': 1}).exec(function(err, doc){
      if(doc){
        responseData.code = 0;
        responseData.type = '查询动态评论';
        responseData.message = '有用户评论过！';
        responseData.data = doc;
        res.json(responseData);
        return;
      }else{
        responseData.code = 0;
        responseData.type = '查询动态评论';
        responseData.message = '还没有评论过哟！'
        res.json(responseData);
        return;
      }
    });
  }
});

/* 添加评论 */
router.post('/article/comment', function(req, res){
  var username = req.body.username;
  var publisher = req.body.publisher;
  var source_type = req.body.source_type;
  var aid = req.body.aid;
  var filmid = req.body.filmid;
  var content = req.body.content;

  var comment = new Comment({
    username: username,
    publisher: publisher,
    source_type: source_type,
    aid: aid,
    filmid: filmid,
    content: content,
    create_time: moment().format('YYYY-MM-DD HH:mm')
  });
  comment.save();
  responseData.code = 1;
  responseData.type = '添加评论';
  responseData.message = '已成功添加评论！';
  responseData.data = comment;
  res.json(responseData);
  return;
});

/* 删除评论 */
router.post('/article/comment/cancel', function(req, res){
  var id = req.body.id;

  Comment.deleteOne({
    _id: ObjectId.createFromHexString(id),
  },function(err, doc){
    if(doc){
      responseData.code = 2;
      responseData.type = '删除评论';
      responseData.message = doc;
      res.json(responseData);
      return;
    };
  });
});

module.exports = router;