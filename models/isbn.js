export default function (sequelize, DataTypes) {
  return sequelize.define(
    'isbn',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      isbn: {
        type: DataTypes.BIGINT(13),
        allowNull: true
      }
    },
    {
      tableName: 'isbn',
      timestamps: false
    }
  );
}
