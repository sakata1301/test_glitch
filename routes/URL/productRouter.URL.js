const express=require('express');
const router=express.Router();
const productController=require('../../controller/URL/productController.URL');

//[GET] /products get all category
router.get('/',productController.getAllData);

module.exports=router;