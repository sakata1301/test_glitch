const express=require('express');
const router=express.Router();
const productController=require('../../controller/API/productController.API');
var uploadMulter = require('../../middleware/multerModel');

//[GET] api/products/:id
router.get('/:id',productController.getProduct);

//[POST] api/products
router.post('/',uploadMulter.single('image'),productController.storeProduct);

//[PUT] api/products/:id
router.put('/:id',uploadMulter.single('image'),productController.updateProduct);

//[DELETE] api/products/:id
router.delete('/:id',productController.deleteProduct);


module.exports=router;