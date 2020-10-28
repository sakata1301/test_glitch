const Category = require('../../model/category');
var moment = require('moment');

class categoryController {
    getAllCategory(req, res, next) {
        try {
            Category.find({}).then((data) => {
                res.render('category', {
                    data: data,
                    moment: moment
                })
            });

        } catch (error) {
            next(error);
        }
    }
}

module.exports = new categoryController();