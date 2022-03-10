const Sequelize = require("sequelize");

module.exports = class Artist extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        nickname: {
          type: Sequelize.STRING(45),
          allowNull: true,
          unique: true,
        },
        AuctionRight: {
          type: Sequelize.STRING(45),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "Artist",
        tableName: "artist",
        paranoid: false,
        // charset: "utf8",
        // collate: "ut8_general_ci",
      }
    );
  }
  static associate(db) {
    // db.Artist.hasMany(db.user, { foreignKey: "fk_artist_user1", sourceKey: "idUser" });
  }
};
