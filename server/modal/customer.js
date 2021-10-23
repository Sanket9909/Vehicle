const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    cust_name: {
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
        required: true
    },
    make:{
        type: String,
        trim: true,
        required: true
    },
    vehicle_number :{
        type: [String],
        required: true
    },
    sub_cat: { type: Object, trim: true },
    createdDate: Date,
    changeDate: Date
});

module.exports = mongoose.model('customer', customerSchema);