'use strict'
var SequelizeMock = require('sequelize-mock')
var dbMock = new SequelizeMock()

module.exports = (sequelize, DataTypes)=>{
  return dbMock.define('Word', {
    word: 'cyberpunk',
    type: 'noun',
    definition: 'computer hacker'
  })
} 
