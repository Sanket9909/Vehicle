const mongoose = require('mongoose');

const makeSchema = mongoose.Schema({
    name:String,
    cars:Array, 
    createdDate: Date,
    changeDate: Date
});

module.exports = mongoose.model('make', makeSchema);