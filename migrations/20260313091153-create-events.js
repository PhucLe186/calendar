'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("events", {

      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },

      title: {
        type: Sequelize.STRING,
        allowNull: false
      },

      start_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      end_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      timezone: {
        type: Sequelize.STRING,
        allowNull: false
      },

      type: {
        type: Sequelize.ENUM("APPOINTMENT","BLOCK"),
        allowNull: false
      },

      owner_id: {
        type: Sequelize.STRING,
        allowNull: false
      },

      notes: {
        type: Sequelize.TEXT
      },

      location: {
        type: Sequelize.STRING
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
    await queryInterface.addIndex("events", [
      "owner_id",
      "start_at",
      "end_at"
    ]);
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("events");
  }
};
