var mongoose = require('mongoose');
var collectionSchema = require('../schemas/CollectionSchemas.js');

module.exports = mongoose.model('Collection',collectionSchema);