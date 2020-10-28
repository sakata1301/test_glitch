const express = require('express');
const router = express.Router();
const unitController = require('../../controller/API/unitController.API');

//[GET] api/unis
router.get('/', unitController.getAllUnit);

//[GET] api/unis/:id
router.get('/:id', unitController.getUnit);

//[POST] api/units
router.post('/', unitController.storeUnit);

//[PUT] api/unit/:id
router.put('/:id', unitController.updateUnit);

//[DELETE] api/unit/:id
router.delete('/:id', unitController.deleteUnit);

module.exports = router;

