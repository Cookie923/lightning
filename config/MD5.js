/**
* 密码加密
*/
var crypto = require('crypto');
module.exports = function (pwd) {
  var md5 = crypto.createHash('md5');
  var password = md5.update(pwd).digest('base64');
  return password;
};