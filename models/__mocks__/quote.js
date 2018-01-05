'use strict'
var SequelizeMock = require('sequelize-mock')
var dbMock = new SequelizeMock()

module.exports = (sequelize, DataTypes)=>{
  return dbMock.define('Quote', {
    quote: 'Well behaved women rarely make history.',
    author: 'May West'
  })
}
