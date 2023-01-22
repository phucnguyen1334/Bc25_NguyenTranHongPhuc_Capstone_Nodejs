const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return DatPhong.init(sequelize, DataTypes);
}

class DatPhong extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ma_phong: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Phong',
        key: 'id'
      }
    },
    ngay_den: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ngay_di: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    so_luong_khach: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ma_nguoi_dat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'NguoiDung',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'DatPhong',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ma_nguoi_dat" },
          { name: "ma_phong" },
        ]
      },
      {
        name: "ma_phong",
        using: "BTREE",
        fields: [
          { name: "ma_phong" },
        ]
      },
    ]
  });
  }
}
