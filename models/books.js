export default function (sequelize, DataTypes) {
  return sequelize.define('books', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vol: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subtitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    publisher: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    published_year: {
      type: 'YEAR(4)',
      allowNull: true
    },
    call_number: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    registered_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'books',
    timestamps: false
  });
}
