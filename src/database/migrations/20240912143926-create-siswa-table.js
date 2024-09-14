'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) { // Removed Sequelize
    await queryInterface.createTable('siswa', {
      id: {
        type: 'INTEGER',
        primaryKey: true,
        autoIncrement: true
      },
      fullName: {
        type: 'STRING',
        allowNull: false,
      },
      nisn: {
        type: 'INTEGER',
        allowNull: false,
        unique: true
      },
      ttl: {
        type: 'STRING',
        allowNull: false
      },
      jenis_kelamin: {
        type: 'STRING',
        allowNull: false
      },
      agama: {
        type: 'STRING',
        allowNull: false
      },
      nomor_hp: {
        type: 'BIGINT',
        allowNull: false
      },
      email: {
        type: 'STRING',
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      alamat: {
        type: 'STRING',
        allowNull: false
      },
      createdAt: {
        type: 'DATE',
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Keep using Sequelize here
      },
      updatedAt: {
        type: 'DATE',
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // Keep using Sequelize here
      }
    });
  },

  async down (queryInterface) { // Removed Sequelize
    await queryInterface.dropTable('siswa');
  }
};
