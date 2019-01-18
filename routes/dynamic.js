var express = require('express');
var router = express.Router();

//引入model
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Viewrecord = require('../models/Viewrecord.js');

var responseData;

router.use(function(req, res, next) {
  responseData = {
    count: 0,
    data: []
  };
  next();
});

/* 用户动态 */
router.get('/account/dynamic', function(req, res){
  var username = req.query.username;
  Viewrecord.find({}).sort({'create_time': -1}).limit(20).exec(function(err,doc){
    responseData.count = 20;
    responseData.data = doc;
    res.json(responseData);
    return;
  });
});

module.exports = router;