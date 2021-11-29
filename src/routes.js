const express = require ('express');
const UserController = require('./controllers/UserController');
const RoleController = require('./controllers/RoleController');
const CategoryController = require('./controllers/CategoryController');
const ProductController = require('./controllers/ProductController');
const AddressController = require('./controllers/AddressController');
// const AuthController = require('./controllers/AuthController');
const auth = require('./middleware/auth')
var cors = require('cors')


const routes = express.Router();
routes.use(cors()) 

// routes.get('/login', AuthController.login);

routes.get('/roles', RoleController.index);
routes.post('/roles', RoleController.store);
routes.delete('/roles/:name',auth, RoleController.delete);

routes.get('/users', UserController.index);
routes.get('/users/:user_id', UserController.single);
routes.put('/users/:user_id', auth, UserController.update);
routes.post('/signin', UserController.signin);
routes.post('/:role_name/signup', UserController.store);
routes.delete('/users/:user_id',auth, UserController.delete);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', auth, AddressController.store);
routes.get('/users/:user_id/addresses/:adress_id', AddressController.single);
routes.put('/users/:user_id/addresses/:adress_id', auth, AddressController.update);

routes.get('/categories', CategoryController.index);
routes.post('/category', auth, CategoryController.store);
routes.delete('/category/:category_id', auth, CategoryController.delete);

routes.get('/products', ProductController.index);
routes.post('/product', auth, ProductController.store);
routes.delete('/product/:product_id', auth, ProductController.delete);

module.exports = routes;