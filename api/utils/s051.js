const Sequelize = require('sequelize')
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    's051',
    {
      S05100: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      S05101: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      S05102: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      S05103: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      S05104: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      S05105: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      S05106: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      S05107: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      S05108: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      S05109: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      S05110: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      S05111: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 's051',
      timestamps: false,
      attributes: '[object Object]',
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'S05100' }],
        },
        {
          name: 'S05100_UNIQUE',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'S05100' }],
        },
      ],
    }
  )
}
