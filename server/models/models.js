const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Click = sequelize.define('click', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    click: {type: DataTypes.INTEGER, defaultValue: 0}
})

module.exports = {
    Click
}