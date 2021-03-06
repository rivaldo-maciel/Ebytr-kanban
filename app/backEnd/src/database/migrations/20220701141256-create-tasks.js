'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.STRING
      },
      columnId: {
        type: Sequelize.INTEGER,
        field: 'column_id',
        references: { model: 'taskColumns', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      boardId: {
        type: Sequelize.INTEGER,
        field: 'board_id',
        references: { model: 'boards', key: 'id' },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      position: {
        type: Sequelize.INTEGER
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};
