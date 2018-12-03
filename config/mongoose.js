const mongoose = require('mongoose');
const config = require('./db_config');

module.exports = () => {
  //连接数据库
  mongoose.connect(config.mongodb,{useNewUrlParser:true})
  //实例化连接对象
  var db = mongoose.connection;
  db.on('error', console.error.bind(console,'连接错误： '));
  db.once('open',(callback) => {
    console.log('MongoDB连接成功！');
  });
  return db;
}