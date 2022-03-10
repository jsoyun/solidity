const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('artist', {
    idArtist: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nickname: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "nickname_UNIQUE"
    },
    AuctionRight: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    user_idUser: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'artist',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idArtist" },
        ]
      },
      {
        name: "nickname_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nickname" },
        ]
      },
      {
        name: "fk_artist_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_idUser" },
        ]
      },
    ]
  });
};
