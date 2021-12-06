const mongoose = require('mongoose');
const opts = { toJSON: { virtuals: true } };
const serviceSchema = mongoose.Schema({
    service_name: {
        type: [String],
        trim: true,
        required: true
    },
    vehicle_number: {
        type: String,
        required: true
    },
    totalbill: {
        type: Number
    },
    createdDate: Date,
    changeDate: Date
}, opts);

module.exports = mongoose.model('service', serviceSchema);
