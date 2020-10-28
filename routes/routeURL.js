
const subCategoryRouter = require('./URL/subCategoryRouter.URL');
const categoryRouter = require('./URL/categoryRouter.URL');
const productRouter = require('./URL/productRouter.URL');
const unitRouter = require('./URL/unitRouter.URL');
const manufacturerRouter = require('./URL/manufacturerRouter.URL');

function routerURL(app) {

    //router subCaterogy
    app.use('/subCategories', subCategoryRouter);

    //router category
    app.use('/categories',categoryRouter);

    //router product
    app.use('/products',productRouter);

    //router unit
    app.use('/units',unitRouter);

    //router manufacturer
    app.use('/manufacturers',manufacturerRouter);

    app.get("/",(req,res)=>{
        res.render('dashboard');
    })

}

module.exports = routerURL;