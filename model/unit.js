const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unit = new Schema(
    {
        name: { type: String, required: true },
    },
    {
        timestamps: true,
    },
    {
        collection: 'unit'
    }
);
module.exports = mongoose.model('unit', unit);
