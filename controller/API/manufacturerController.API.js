const Manufacturer = require('../../model/manufacturer');
const Product = require('../../model/product');

class manufacturer {

    //[GET] api/manufacturers
    getAllManufacturer(req, res, next) {
        try {
            Manufacturer.find({}).then((dataManufacturer) => {
                res.status(200).json({
                    data: dataManufacturer
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

    //[GET] api/manufacturers/:id
    getManufacturer(req, res, next) {
        try {
            var id = req.params.id;
            Manufacturer.findById({ _id: id }).then((dataManufacturer) => {
                res.status(200).json({
                    data: dataManufacturer
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


    //[POST] api/manufacturers
    storeManufacturer(req, res, next) {
        try {
            console.log("da vo insert")
            const manufacturer = new Manufacturer({
                name: req.body.name,
                address: req.body.address,
                email: req.body.email,
                phone: req.body.phone

            })

            manufacturer.save().then((data) => {
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

    //[PUT] api/manufacturers/:id
    updateManufacturer(req, res, next) {
        try {
            const id = req.params.id;
            const newManufacturer = {
                name: req.body.name,
                address: req.body.address,
                email: req.body.email,
                phone: req.body.phone
            };

            Manufacturer.findByIdAndUpdate({ _id: id }, newManufacturer).then((data) => {
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

    //[DELETE] api/manufacturers/:id
    async deleteManufacturer(req, res, next) {
        try {
            const id = req.params.id;

            const resultCount = (await Product.find({ manufacturerID: id })).length;
            console.log("count " + resultCount);

            if (resultCount > 0) {
                return res.status(400).json({
                    error: error
                })
            };




            Manufacturer.findByIdAndDelete({ _id: id }).then((data) => {
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

module.exports = new manufacturer();