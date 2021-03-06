import { Model, Sequelize } from 'sequelize';

class Beer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        tag_line: Sequelize.STRING,
        description: Sequelize.STRING,
        image_url: Sequelize.STRING,
        abv: Sequelize.STRING,
        ibu: Sequelize.STRING,
        food_pairing: Sequelize.STRING,
        drinking_tips: Sequelize.STRING,
        value: Sequelize.STRING,
        pub: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' });
  }
}

export default Beer;
