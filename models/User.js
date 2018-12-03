var mongoose = require('mongoose');
var userSchema = require('../schemas/UserSchema');

module.expors = mongoose.model('User',userSchema);