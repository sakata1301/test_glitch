const SubCategory = require('../../model/subCategory');
const Category = require('../../model/category');
const Product = require('../../model/product');


class subCategoryController {

    //[GET] api/subCategories
    getAllSubCategory(res, req, next) {
        try {
            SubCategory.find({}).populate('owner').then((dataSub) => {
                req.status(200).json({
                    data: dataSub
                })
            }).catch((error) => {
                req.status(400).json({
                    error: error
                })
            })
        } catch (error) {
            next(error)
        }
    }

    //[GET] api/subCategories/:id
    getSubCategory(res, req, next) {
        try {
            const id = res.params.id;
            SubCategory.findById(id).then((data) => {
                req.status(200).json({
                    data: data
                })
            }).catch((error) => {
                req.status(400).json({
                    error: error
                })
            })

        } catch (error) {
            next(error)
        }
    }


    //[POST] api/subCategories
    async storeSubCategory(req, res, next) {
        try {

            const owner = await Category.findById(req.body.categoryID);

            //kiem tra xem category co ton tai khong
            if (owner == null) {
                res.status(400).json({
                    status: "false",
                    message: "CategoryID khong ton tai"
                })
            }


            const newSubCategory = new SubCategory({
                name: req.body.name,
                owner: owner._id
            });

            newSubCategory.save().then((data) => {

                owner.subCategory.push(data._id);
                owner.save();

                res.status(200).json({
                    status: "true",
                    data: data
                })
            }).catch((error) => {
                res.status(400).json({
                    status: "false",
                    message: "Luu khong thanh cong",
                    error: error
                })
            })

        } catch (error) {
            next(error)
        }
    }

    //[DELETE] api/subCategories/:id
    async deleteSubCategories(req, res, next) {
        try {
            const id = req.params.id;


            const resultCount = (await Product.find({ subCategoryID: id })).length;
            console.log("count " + resultCount);

            if (resultCount > 0) {
                return res.status(400).json({
                    error: error
                })
            };

            SubCategory.findOneAndDelete({ _id: id }).then(async (data) => {

                const _subCategory = await Category.findById({ _id: data.owner });
                _subCategory.subCategory = _subCategory.subCategory.filter((value) => {
                    return value != id;
                });
                await _subCategory.save();


                res.status(200).json({
                    status: "success",
                })
            }).catch((error) => {
                res.status(400).json({
                    status: "false",
                    message: "xoa khong thanh cong",
                    error: error
                })
            })

        } catch (error) {
            next(error);
        }

    }

    //[PUT] api/subCategories/:id
    updateSubCategories(req, res, next) {
        try {
            const id = req.params.id;
            const newSubCategory = {
                name: req.body.name,
                owner: req.body.categoryID
            };



            SubCategory.findOneAndUpdate({ _id: id }, newSubCategory).then(async (data) => {

                if ((req.body.categoryID) && (req.body.categoryID != data.owner)) {
                    console.log("vo block xet cate");
                    //xoa subCateID o arr cu
                    const oldCategory = await Category.findById({ _id: data.owner });

                    console.log(oldCategory + " ")
                    oldCategory.subCategory = oldCategory.subCategory.filter((value) => {
                        return value != id;
                    });
                    await oldCategory.save();

                    //them subCateID o arr moi
                    const newCategory = await Category.findById({ _id: req.body.categoryID });
                    newCategory.subCategory.push(id);
                    await newCategory.save();

                    console.log("het block xet cate")
                }


                res.status(200).json({
                    status: "success",
                    data: data
                })
            }).catch((error) => {
                res.status(400).json({
                    status: "false",
                    message: "update khong thanh cong",
                    error: error
                })
            })
        } catch (error) {
            next(error);
        }
    }


}

module.exports = new subCategoryController();