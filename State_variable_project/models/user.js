const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        // idUser: {
        //   type: Sequelize.INTEGER,
        //   allowNull: false,
        //   // unique: true,
        //   primaryKey: true,
        //   autoIncrement: true,
        // },
        name: {
          type: Sequelize.STRING(45),
          allowNull: false,
          // unique: true,
        },
        nation: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
        favor_genre: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        address: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "User",
        tableName: "user",
        paranoid: false,
        charset: "utf8",
        collate: "ut8_general_ci",
      }
    );
  }
  static associate(db) {
    // db.User.hasMany(db.Like, { foreignKey: "UserLike", sourceKey: "idUser" });
  }
};
