const categoryRouter=require('./API/categoryRouter.API');
const subCategoryRouter=require('./API/subCategoryRouter.API');
const unitRouter=require('./API/unitRouter.API');
const manufacturerRouter=require('./API/manufacturerRouter.API');
const productRouter=require('./API/productRouter.API');

const methodOverride=require('method-override');

function routerAPI(app) {


    //router category
    app.use('/api/categories',categoryRouter);

    //router subCaterogy
    app.use('/api/subCategories',subCategoryRouter);

    //router unit
    app.use('/api/units',unitRouter);

    //router manufacturer
    app.use('/api/manufacturers',manufacturerRouter);

    //router product
    app.use('/api/products',productRouter);


}

module.exports = routerAPI;