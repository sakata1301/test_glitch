const express=require('express');
const router=express.Router();
const subCategoryController=require('../../controller/API/subCategoryController.API');

//[GET] api/subCategory/:id
router.get('/:id',subCategoryController.getSubCategory);

//[GET] api/subCategory
router.get('/',subCategoryController.getAllSubCategory);

//[POST] api/subCategories
router.post('/',subCategoryController.storeSubCategory);

//[DELETE] api/subCategories
router.delete('/:id',subCategoryController.deleteSubCategories);

//[PUT] api/subCategories/:id
router.put('/:id',subCategoryController.updateSubCategories);


module.exports=router;