const express=require('express');
const router=express.Router();
const subCategoryController=require('../../controller/URL/subCategoryController.URL');

//[GET] subCategories
router.get('/',subCategoryController.getAllSubCategory);

module.exports=router;
