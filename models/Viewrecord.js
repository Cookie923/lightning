var mongoose = require('mongoose');
var viewSchema = require('../schemas/ViewrecordSchemas.js');

module.exports = mongoose.model('ViewRecord',viewSchema);