const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    service_name: {
        type: [String],
        trim: true,
        required: true
    },
    vehicle_number :{
        type: String,
        required: true
    },
    totalbill :{
        type: Number
    },
    createdDate: Date,
    changeDate: Date
});

module.exports = mongoose.model('service', serviceSchema);
