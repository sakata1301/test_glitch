const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const category = new Schema(
    {
        name: { type: String, required: true },
        subCategory: [{
            type: Schema.Types.ObjectId,
            ref: "subCategory"
        }],
    },
    {
        timestamps: true,
    },
    {
        collection: 'category'
    }
);
module.exports = mongoose.model('category', category);
