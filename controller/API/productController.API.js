const Product = require('../../model/product');
const cloudinary = require('../../middleware/cloudinaryModel');


class productController {

    //[GET] api/products/:id
    getProduct(req, res, next) {
        try {
            const id = req.params.id;
            Product.findById({ _id: id }).then((data) => {
                res.status(200).json({
                    data: data
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

    //[POST] api/products
    async storeProduct(req, res, next) {
        try {


            const result = await cloudinary.uploadSingle(req.file.path);
            console.log("path: " + req.file.path)
            const product = new Product(req.body);
            product.imageURL = result.url;

            console.log(product);
            product.save().then((data) => {
                res.status(200).json({
                    status: "success",
                    data: data
                })
            }).catch((error) => {
                res.status(400).json({
                    status: "falled",
                    error: error
                })
            })


        } catch (error) {
            next(error)
        }
    }

    //[PUT] api/products/:id
    async updateProduct(req, res, next) {
        try {
            const id = req.params.id;
            const product = req.body;
            console.log("da vao put");
            if (req.body.image != '') {
                const result = await cloudinary.uploadSingle(req.file.path);
                product.imageURL = result.url;

            }

            console.log(product);
            Product.findByIdAndUpdate({ _id: id }, product).then((data) => {
                res.status(200).json({
                    status: "success",
                    data: data
                })
            }).catch((error) => {
                res.status(400).json({
                    status: "falled",
                    error: error
                })
            })




        } catch (error) {
            next(error)
        }
    }
    
     //[DELETE] api/products/:id
     async deleteProduct(req, res, next) {
        try {
            const id = req.params.id;


            Product.findByIdAndDelete({ _id: id }).then((data) => {
                res.status(200).json({
                    status: "success",
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



}

module.exports = new productController();