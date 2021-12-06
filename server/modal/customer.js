const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };
const customerSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    mobile: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique:true,
        dropDups:true
    },
    make:{
        type: String,
        trim: true,
        required: true
    },
    model:{
        type: String,
        trim: true,
        required: true
    },
    carNumber :{
        type: String,
        required: true
    },
    createdDate: Date,
    changeDate: Date
},opts);

module.exports = mongoose.model('customer', customerSchema);