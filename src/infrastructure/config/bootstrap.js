'use strict';

require('dotenv').config();

const constants = require('./constants');
const environment = require('./environment');

module.exports = {
  async init() {
    if (environment.database.dialect === constants.SUPPORTED_DATABASE.SQLITE){
      const sequelize = require('../orm/sequelize/sequelize');
      try {
        await sequelize.sync();
        console.log('Connected to database');
      } catch (err) {
        console.error('Unable to connect to the database:', err);
      }
    }
  }
};
