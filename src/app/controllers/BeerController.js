import * as Yup from 'yup';
import Beer from '../models/Beer';

class BeerController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        tag_line: Yup.string().required(),
        description: Yup.string().required(),
        image_url: Yup.string().required(),
        abv: Yup.string().required(),
        ibu: Yup.string(),
        food_pairing: Yup.string(),
        drinking_tips: Yup.string(),
        value: Yup.string().required(),
        pub: Yup.string(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({
          message: 'Invalid data, try again',
        });
      }

      if (!req.userId) {
        return res.status(401).json({
          error: 'You have no authorizarion to add this post',
        });
      }

      const data = {
        user_id: req.userId,
        ...req.body,
      };

      const {
        name,
        tag_linem,
        descriptiom,
        abv,
        ibu,
        value,
        pub,
        image_url,
      } = await Beer.create(data);

      return res.json({
        name,
        tag_linem,
        descriptiom,
        abv,
        ibu,
        value,
        pub,
        image_url,
      });
    } catch (err) {
      return res.status(400).json({
        error: err,
      });
    }
  }
}

export default new BeerController();
