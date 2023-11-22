module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'code',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      code: {
        type: DataTypes.STRING(8),
        allowNull: true,
      },
      used: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      usedDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'code',
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
