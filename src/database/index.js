const sequelize = require('sequelize');
const dbConfig = require('../config/database');
const { Sequelize } = require('sequelize');

const User = require ('../models/User')
const Address = require ('../models/Address')
const Category = require ('../models/Category')
const Product = require ('../models/Product')
const Role = require ('../models/Role')

const connection = new Sequelize(dbConfig);

Role.init(connection);
User.init(connection);
Address.init(connection);
Category.init(connection);
Product.init(connection);

Role.associate(connection.models);
User.associate(connection.models);
Address.associate(connection.models);
Category.associate(connection.models);
// Product.associate(connection.models);

module.exports = connection;