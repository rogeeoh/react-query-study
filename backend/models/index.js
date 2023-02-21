'use strict';
const Sequelize = require('sequelize');
const db = {};

// init sequelize for sqlite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3'
});

db.User = require('./User')(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
