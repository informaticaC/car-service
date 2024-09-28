// import { Sequelize } from 'sequelize';
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize;

//DATABASE_URL = postgres://postgres:root@127.0.0.1:5432/car_service