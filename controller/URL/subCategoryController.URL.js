const SubCategory = require('../../model/subCategory');
var moment = require('moment'); 

class subCategoryController {

    //[GET] subCategories
    getAllSubCategory(req, res, next) {
        try {
            SubCategory.find({}).populate('owner').then((dataSub) => {
                res.render('subCategory', {
                    data: dataSub,
                    moment:moment
                })
            }).catch((error) => {

            })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new subCategoryController();