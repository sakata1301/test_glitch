const express=require('express');
const router=express.Router();
const categoryController=require('../../controller/API/categoryController.API')


//[GET] api/categories/:id/subCategories
router.get('/:id/subCategories',categoryController.getSubCategoryOfCatgory);

//[GET] api/categories/:id
router.get('/:id',categoryController.getCategory);

//[GET] api/categories
router.get('/',categoryController.getAllCategory);

//[POST] api/categories
router.post('/',categoryController.storeCategory);

//[DELET] api/categories
router.delete('/:id',categoryController.deleteCategory);

//[PUT] api/categories/:id
router.put('/:id',categoryController.updateCaterogy);

module.exports=router;