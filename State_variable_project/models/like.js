const Sequelize = require("sequelize");

module.exports = class Like extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        Artist_like: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        Music_like: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Like",
        tableName: "likes",
        paranoid: false,
        charset: "utf8",
        collate: "ut8_general_ci",
      }
    );
  }
  static associate(db) {
    db.Like.belongsTo(db.User, {
      foreignKey: "UserLike",
      tartgetKey: "idLike",
    });
  }
};
