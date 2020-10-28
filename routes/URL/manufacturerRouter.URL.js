const express=require('express');
const router=express.Router();
const manufacturerController=require('../../controller/URL/manufacturerController.URL');

//[GET] /categories get all category
router.get('/',manufacturerController.getAllManufacturer);

module.exports=router;