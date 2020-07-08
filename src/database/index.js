import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Beer from '../app/models/Beer';

const models = [User, Beer];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map((model) => model.init(this.connection));
    Beer.associate(this.connection.models);
  }
}

export default new Database();
