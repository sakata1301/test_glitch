const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subCategory = new Schema(
    {
        name: { type: String, required: true },
        owner:{
            type:Schema.Types.ObjectId,
            ref:'category'
        }
    },
    {
        timestamps: true,
    },
    {
        collection: 'subCategory'
    }
);
module.exports = mongoose.model('subCategory', subCategory);
