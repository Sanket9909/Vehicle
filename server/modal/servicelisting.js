const mongoose = require('mongoose');

const servicelistingSchema = mongoose.Schema({
    servicelisting: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('servicelisting', servicelistingSchema);
