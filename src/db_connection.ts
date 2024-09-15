import { Sequelize } from 'sequelize';
import { SequelizeOptions } from 'sequelize-typescript';
import config from './database/config/config.mjs'; // Import default

// Gunakan environment sesuai kondisi (production atau development)
const environment = process.env.NODE_ENV || 'development';
const dbOptions = <SequelizeOptions>config[environment];

dbOptions.dialectModule = require('pg');

const sequelize = new Sequelize(dbOptions);

export default sequelize;
