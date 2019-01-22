var mongoose = require('mongoose');
var commentsSchema = require('../schemas/CommentsSchemas.js');

module.exports = mongoose.model('Comments',commentsSchema);