const express = require('express');
const app = express.Router()

const authentication = require('../middleware/authenticationMiddleware');
const ProductController = require('../controller/productController');
const errorMiddleware = require('../middleware/errorMiddleware');

app.get('/product', authentication, ProductController.getProduct);
app.get('/product/count', authentication, ProductController.countProduct);
app.post('/product', authentication, ProductController.addProduct);
app.patch('/product', authentication, ProductController.editProduct);
app.delete('/product', authentication, ProductController.deleteProduct);

app.use(errorMiddleware)
module.exports = app