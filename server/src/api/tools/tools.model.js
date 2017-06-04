'use strict';

const Mongoose = require('mongoose');

const ToolSchema = new Mongoose.Schema({
    name: String,
    details: String,
    image: String,
    link: String,
    favorite: Boolean,
    category: String,
    tags: new Array(String)
});

module.exports = Mongoose.model('Tool', ToolSchema);
