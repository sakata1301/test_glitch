const Unit = require('../../model/unit');
var moment = require('moment');

class unitController {
    getAllUnit(req, res, next) {
        try {
            Unit.find({}).then((data) => {
                res.render('unit', {
                    data: data,
                    moment: moment
                })
            });

        } catch (error) {
            next(error);
        }
    }
}

module.exports = new unitController();