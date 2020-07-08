import { Op } from 'sequelize';
import User from '../models/User';
import Beer from '../models/Beer';

class SearchController {
  async searchUsers(req, res) {
    const { searchText } = req.body;
    const { page, limit, order } = req.query;
    const response = searchText
      ? await User.findAll({
          where: {
            [Op.or]: [{ name: searchText }, { email: searchText }],
          },
          attributes: ['id', 'name', 'email'],
          limit,
          offset: (page - 1) * limit,
          order: 'updated_at',
        })
      : await User.findAll();
    return res.json(response);
  }

  async searchBeers(req, res) {
    const { searchText } = req.body;
    const { likes, postDate, tags, foodPairing, pub, page, limit } = req.query;

    const response = searchText
      ? Beer.findAll({
          where: {
            [Op.or]: [
              { name: searchText },
              { tags: searchText },
              { food_pairing: searchText },
              { abv: searchText },
              { ibu: searchText },
            ],
          },
          order: 'created_at',
        })
      : Beer.findAll();

    return res.json(response);
  }
}

export default new SearchController();
