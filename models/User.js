var mongoose = require('mongoose');
var userSchema = require('../schemas/UserSchemas.js');

module.exports = mongoose.model('User',userSchema);