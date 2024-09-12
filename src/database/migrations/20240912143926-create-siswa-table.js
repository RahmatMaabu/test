'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('siswa', {
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
     },
     fullName: {
       type: Sequelize.STRING,
       allowNull: false,
     },
     nisn: {
       type: Sequelize.INTEGER,
       allowNull: false,
       unique: true
     },
     ttl: {
       type: Sequelize.STRING,
       allowNull: false
     },
     jenis_kelamin: {
       type: Sequelize.STRING,
       allowNull: false
     },
     agama: {
       type: Sequelize.STRING,
       allowNull: false
     },
     nomor_hp: {
       type: Sequelize.BIGINT,
       allowNull: false
     },
     email: {
       type: Sequelize.STRING,
       allowNull: false,
       unique: true,
       validate: {
         isEmail: true
       }
     },
     alamat: {
       type: Sequelize.STRING,
       allowNull: false
     },
     createdAt: {
       type: Sequelize.DATE,
       allowNull: false,
       defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
     },
     updatedAt: {
       type: Sequelize.DATE,
       allowNull: false,
       defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
     }
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('siswa')
  }
};
