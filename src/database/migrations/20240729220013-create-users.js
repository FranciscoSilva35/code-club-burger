'use strict';

// const { toDefaultValue } = require('sequelize/lib/utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {

      id: {

        type: Sequelize.UUID,

        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,

      },


      name: {

        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },


      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,

      },

      admin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,

      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      updated_at: {

        type: Sequelize.DATE,
        allowNull: false,

      },

    })

  },

    down: async  (queryInterface) => {
 
      await queryInterface.dropTable('users')
     
  },
}
