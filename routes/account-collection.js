var express = require('express');
var router = express.Router();

//引入model
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Collection = require('../models/Viewrecord.js');

var responseData;

router.use(function(req, res, next) {
  responseData = {
    data: []
  };
  next();
});

/* 我的收藏 */
router.get('/account/collection', function(req, res){
  var username = req.query.username;
  Collection.find({
    username: username,
    type: 'collection'
  }).sort({'create_time': -1}).exec(function(err,doc){
    responseData.data = doc;
    res.json(responseData)
    return;
  });
});

module.exports = router;