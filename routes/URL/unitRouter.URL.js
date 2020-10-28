const express=require('express');
const router=express.Router();
const unitController=require('../../controller/URL/unitController.URL');

//[GET] /categories get all category
router.get('/',unitController.getAllUnit);

module.exports=router;