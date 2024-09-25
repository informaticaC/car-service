import { Sequelize } from 'sequelize';
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL);

export default sequelize;

//DATABASE_URL = postgres://postgres:root@127.0.0.1:5432/car_service