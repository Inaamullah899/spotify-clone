const sequelize = require("../../common/dbConnection");
const { DataTypes } = require("sequelize");

const user = sequelize.define(
  "user",
  {
    userId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    confirmEmail: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    confirmPassword: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    likedSongs: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    likedPlayLists: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    subscribedArtists: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
  },
  {
    timestamps: true,
    // paranoid: true, //soft delete
  }
);

module.exports = user;
