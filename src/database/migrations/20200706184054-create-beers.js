module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('beers', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tag_line: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      abv: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ibu: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      food_pairing: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      drinking_tips: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      pub: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    return queryInterface.dropTable('beers');
  },
};
