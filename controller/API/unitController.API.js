const Unit = require('../../model/unit');
const Product = require('../../model/product');

class unitController {

    //[GET] api/units 
    getAllUnit(req, res, next) {
        try {
            Unit.find({}).then((dataUnit) => {
                res.status(200).json({
                    data: dataUnit
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

    //[GET] api/units/:id
    getUnit(req, res, next) {
        try {
            var id = req.params.id;
            Unit.findById(id).then((dataUnit) => {
                res.status(200).json({
                    data: dataUnit
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

    //[POST] api/units
    async storeUnit(req, res, next) {
        try {
            const newUnit = new Unit({
                name: req.body.name,
            });

            newUnit.save().then((data) => {

                res.status(200).json({
                    status: "true",
                    data: data
                });

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

    //[PUT] api/unit/:id
    updateUnit(req, res, next) {
        try {
            const id = req.params.id;
            const newUnit ={
                name:req.body.name
            };
            Unit.findByIdAndUpdate({_id:id}, newUnit).then((data) => {
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

    //[DELETE] api/units/:id
    async deleteUnit(req, res, next) {
        try {
            const id = req.params.id;

            const resultCount = (await Product.find({ unitID: id })).length;
            console.log("count " + resultCount);

            if (resultCount > 0) {
                return res.status(400).json({
                    error: error
                })
            };


            Unit.findByIdAndDelete({ _id: id }).then((data) => {
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

module.exports = new unitController();