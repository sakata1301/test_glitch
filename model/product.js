const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema(
    {
        name: { type: String, required: true },
        originalPrice: { type: Number, required: true },
        sellingPrice: { type: Number, required: true },
        description:{type:String},
        categoryID:{
            type:Schema.Types.ObjectId,
            ref:'category'
        },
        subCategoryID:{
            type:Schema.Types.ObjectId,
            ref:'subCategory'
        },
        unitID:{
            type:Schema.Types.ObjectId,
            ref:'unit'
        },
        manufacturerID:{
            type:Schema.Types.ObjectId,
            ref:'manufacturer'
        },
        madeIn: { type: String, required: true },
        imageURL: { type: String, required: true },
        isActive:{type:String},


    },
    {
        timestamps: true,
    },
    {
        collection: 'product'
    }
);
module.exports = mongoose.model('product', product);
