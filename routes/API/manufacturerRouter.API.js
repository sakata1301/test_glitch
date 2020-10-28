const express=require('express');
const router=express.Router();
const manufacturerController=require('../../controller/API/manufacturerController.API');

//[GET] api/manufacturers
router.get('/',manufacturerController.getAllManufacturer);

//[GET] api/manufacturers/:id
router.get('/:id',manufacturerController.getManufacturer);

//[POST] api/manufacturers
router.post('/',manufacturerController.storeManufacturer);

//[PUT] api/manufacturers
router.put('/:id',manufacturerController.updateManufacturer);

//[DELETE] api/manufacturers/:id
router.delete('/:id',manufacturerController.deleteManufacturer);



module.exports=router;