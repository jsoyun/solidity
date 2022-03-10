const Sequelize = require("sequelize");

module.exports = class Music extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(45),
          allowNull: false,
          // unique: true,
        },
        release: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        genre: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        composer: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        lyricist: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        playTime: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        playCount: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "Music",
        tableName: "music",
        paranoid: false,
        charset: "utf8",
        collate: "ut8_general_ci",
      }
    );
  }
  static associate(db) {
    // db.Artist.hasMany(db.user, { foreignKey: "fk_artist_user1", sourceKey: "idUser" });
  }
};
