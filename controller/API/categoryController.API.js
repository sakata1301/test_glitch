const Category = require('../../model/category');
const Product = require('../../model/product');

class categoryController {
    //[GET] api/categories
    getAllCategory(req, res, next) {
        try {
            Category.find({}).then((dataCategory) => {
                res.status(200).json({
                    data: dataCategory
                })
            }).catch((error) => {
                res.status(400).json({
                    error: error
                })
            })
        } catch (error) {
            next(error);
        }
    }

    //[GET] api/categories/:id
    getCategory(req, res, next) {
        try {
            var id = req.params.id;
            Category.findById(id).then((dataCategory) => {
                res.status(200).json({
                    data: dataCategory
                })
            }).catch((error) => {
                res.status(400).json({
                    error: error
                })
            })
        } catch (error) {
            next(error)
        }

    }

    //[GET] api/categories/:id/subCategories
    getSubCategoryOfCatgory(req, res, next) {
        try {
            const id = req.params.id;
            Category.findById({ _id: id }).populate('subCategory').then((data) => {
                res.status(200).json({
                    data: data.subCategory
                })
            })

        } catch (error) {
            next(error)
        }
    }

    //[POST] api/categories
    storeCategory(req, res, next) {
        try {
            const category = new Category({
                name: req.body.name
            })

            category.save().then((data) => {
                res.status(200).json({
                    data: data
                })
            }).catch((error) => {
                res.status(400).json({
                    error: error
                })
            })

        } catch (error) {
            next(error)
        }
    }

    //[DELETE] api/categories/:id
    async deleteCategory(req, res, next) {
        try {
            const id = req.params.id;

            const resultCount = (await Product.find({ categoryID: id })).length;
            console.log("count " + resultCount);

            if (resultCount > 0) {
                return res.status(400).json({
                    error: error
                })
            };



           //Kiem tra xem ID nay co
            Category.findById({ _id: id }).then((data) => {

                if (data.subCategory.length > 0) {
                    res.status(400).json({
                        error: "Thuoc tinh nay da duoc su dung"
                    });

                } else {

                    Category.findByIdAndDelete({ _id: id }).then((data) => {
                        res.status(200).json({
                            status: "success",
                        })
                    }).catch((error) => {
                        res.status(400).json({
                            error: error
                        })
                    })

                }
            });



        } catch (error) {
            next(error);
        }
    }

    //[PUT] api/caterogies/:id
    updateCaterogy(req, res, next) {
        try {
            const id = req.params.id;
            const newCaterogy = req.body;
            Category.findByIdAndUpdate(id, newCaterogy).then((data) => {
                res.status(200).json({
                    success: "true",
                    data: data
                })
            }).catch((error) => {
                res.status(400).json({
                    success: "false",
                    error: error
                })
            })

        } catch (error) {
            next(error);
        }
    }



}

module.exports = new categoryController()