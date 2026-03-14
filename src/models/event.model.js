const { DataTypes } = require("sequelize");
const sequelize = require("../../config/db");


const Event = sequelize.define("Event", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    start_at: {
      type: DataTypes.DATE,
      allowNull: false
    },

    end_at: {
      type: DataTypes.DATE,
      allowNull: false
    },

    timezone: {
      type: DataTypes.STRING,
      allowNull: false
    },

    type: {
      type: DataTypes.ENUM("APPOINTMENT","BLOCK"),
      allowNull: false
    },

    owner_id: {
      type: DataTypes.STRING,
      allowNull: false
    },

    notes: {
      type: DataTypes.TEXT,
    },

    location: {
      type: DataTypes.STRING,
    }
  }, {
    tableName: "events",
    timestamps: false
  });

module.exports= Event