var express = require('express');
var router = express.Router();

var moment = require('moment');
//引入model
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Viewrecord = require('../models/Viewrecord.js');

var responseData;

router.use(function (req, res, next) {
  responseData = {
    code: 0,
    rtype: 0,
    rating: 0,
    comment: '',
    date: moment().format('YYYY-MM-DD HH:mm'),
    message: ''
  };
  next();
});

/* 想看电影 */
router.post('/film/viewrecord/wanted', function(req, res){
  var username = req.body.username;
  var filmid = req.body.filmid;
  var filminfo = req.body.filminfo;

  Viewrecord.updateOne({
    username: username,
    filmid: filmid
  },{$set: {
    rtype: 1,
    raing: 0,
    comment: ''
  }},function(err, doc){
    if(doc.nModified === 1){
      responseData.code = 1;
      responseData.rtype = 1;
      responseData.message = '该电影状态已修改为想看。';
      res.json(responseData);
      return;
    }
    var viewrecord = new Viewrecord({
      username: username,
      filmid: filmid,
      rating: 0,
      rtype: 1,
      comment: '',
      filminfo: filminfo,
      create_time: moment().format('YYYY-MM-DD HH:mm')
    });
    viewrecord.save();
    responseData.code = 1;
    responseData.rtype = 1;
    responseData.message = '已想看该电影！';
    res.json(responseData);
    return;
  });
});

/* 看过电影 */
router.post('/film/viewrecord/watched', function(req, res){
  var username = req.body.username;
  var filmid = req.body.filmid;
  var rating = req.body.rating;
  var comment = req.body.comment;
  var filminfo = req.body.filminfo;

  Viewrecord.updateOne({
    username: username,
    filmid: filmid
  },{$set: {
    rtype: 2,
    rating: rating,
    comment: comment,
    create_time: moment().format('YYYY-MM-DD HH:mm')
  }},function(err, doc){
    if(doc.nModified === 1){
      responseData.code = 2;
      responseData.rtype = 2;
      responseData.comment = comment;
      responseData.rating = rating;
      responseData.message = '观影状态，已修改。'
      res.json(responseData);
      return;
    }
    var viewrecord = new Viewrecord({
      username: username,
      filmid: filmid,
      rating: rating,
      rtype: 2,
      comment: comment,
      filminfo: filminfo,
      create_time: moment().format('YYYY-MM-DD HH:mm')
    });
    viewrecord.save();
    responseData.code = 2;
    responseData.rtype = 2;
    responseData.comment = comment;
    responseData.rating = rating;
    responseData.message = '已看过该电影！'
    res.json(responseData);
    return;
  });
});

/* 查询当前电影的观影状态 */
router.post('/film/viewrecord',function(req,res){
  var username = req.body.username;
  var filmid = req.body.filmid;

  Viewrecord.findOne({
    username: username,
    filmid:filmid
  },function(err, doc){
    if(doc){
      responseData.code = 3;
      responseData.rtype = doc.rtype;
      responseData.rating = doc.rating;
      responseData.comment = doc.comment;
      responseData.message = '该电影存在观影记录！';
      res.json(responseData);
      return;
    }
    console.log(doc)
    responseData.code = 4;
    responseData.rtype = 0;
    responseData.message = '这个电影还没有标记过！';
    res.json(responseData);
    return;
  });
});

/* 删除记录 */
router.post('/film/viewrecord/delete',function(req,res){
  var username = req.body.username;
  var filmid = req.body.filmid;

  Viewrecord.deleteOne({
    username: username,
    filmid: filmid
  },
  function(err, doc){
    if(doc){
      responseData.code = 4;
      responseData.message = '记录删除成功！';
      res.json(responseData);
      return;
    }
  });
});

//导出数据
module.exports = router;