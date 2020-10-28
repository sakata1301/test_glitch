const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const manufacturer = new Schema(
    {
        name: { type: String, required: true },
        address: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },

    },
    {
        timestamps: true,
    },
    {
        collection: 'manufacturer'
    }
);
module.exports = mongoose.model('manufacturer', manufacturer);
