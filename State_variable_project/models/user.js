const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(45),
          allowNull: false,
          unique: true,
        },
        nation: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "users",
        paranoid: false,
        charset: "utf8",
        collate: "ut8_general_ci",
      }
    );
  }
  static associate(db) {
    db.User.hasMany(db.Like, { foreignKey: "UserLike", sourceKey: "idUser" });
  }
};
