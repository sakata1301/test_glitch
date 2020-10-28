const Category = require('../../model/category');
const Unit = require('../../model/unit');
const Manufacturer = require('../../model/manufacturer');
const Product = require('../../model/product');
var moment = require('moment');


class productController {
    getAllData(req, res, next) {
        try {

            const getDataCategory = Category.find({});
            const getDataUnit = Unit.find({});
            const getManufacturer = Manufacturer.find({});
            const getProduct = Product.find({}).populate('categoryID').populate('subCategoryID').populate('manufacturerID');

            Promise.all([getDataCategory, getDataUnit, getManufacturer, getProduct]).then((value) => {
                res.render('product', {
                    category: value[0],
                    unit: value[1],
                    manufacturer: value[2],
                    product: value[3],
                    moment:moment
                });
            })


            // res.render('product');

        } catch (error) {
            next(error);
        }
    }
}

module.exports = new productController();