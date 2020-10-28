const Manufacturer = require('../../model/manufacturer');
var moment = require('moment');

class manufacturerController {
    getAllManufacturer(req, res, next) {
        try {
            Manufacturer.find({}).then((data) => {
                res.render('manufacturer', {
                    data: data,
                    moment: moment
                })
            });

        } catch (error) {
            next(error);
        }
    }
}

module.exports = new manufacturerController();