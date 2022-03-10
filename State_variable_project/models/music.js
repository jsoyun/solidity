const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('music', {
    idMusic: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    release: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    genre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    composer: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lyricist: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    artist_idArtist: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'artist',
        key: 'idArtist'
      }
    },
    playTime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    playCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'music',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idMusic" },
          { name: "artist_idArtist" },
        ]
      },
      {
        name: "fk_music_artist1_idx",
        using: "BTREE",
        fields: [
          { name: "artist_idArtist" },
        ]
      },
    ]
  });
};
