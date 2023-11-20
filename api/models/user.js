module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'user',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ageGroup: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      district: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      regDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phoneType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      notifToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      appVersion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isNotif: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'user',
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
