module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'word',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      eng: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      mon: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      class: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      engFilename: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      monFilename: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'word',
      timestamps: false,
      attributes: '[object Object]',
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
      ],
    }
  )
}
