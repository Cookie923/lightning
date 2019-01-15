var express = require('express');
var router = express.Router();

//引入model
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Viewrecord = require('../models/Viewrecord.js');

var responseData;

router.use(function(req, res, next) {
	responseData = {
		code: 0,
		rtype: 0,
		data: []
	};
	next();
});

/* 所有想看的电影,1 */
router.get('/account/viewrecord/wanted', function(req, res){
	var username = req.query.username;
  Viewrecord.find({
    username: username,
    rtype: 1
  },function(err, doc){
    responseData.code = 1;
    responseData.rtype = 1;
    responseData.data = doc;
    res.json(responseData)
    return;
  });
});

/* 所有看过的电影,2 */
router.get('/account/viewrecord/watched', function(req, res){
  var username = req.query.username;
  Viewrecord.find({
    username: username,
    rtype: 2
  },function(err, doc){
    responseData.code = 1;
    responseData.rtype = 2;
    responseData.data = doc;
    res.json(responseData)
    return;
  });
});
module.exports = router;