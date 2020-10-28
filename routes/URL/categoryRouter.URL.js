const express=require('express');
const router=express.Router();
const categoryController=require('../../controller/URL/categoryController.URL');

//[GET] /categories get all category
router.get('/',categoryController.getAllCategory);

module.exports=router;