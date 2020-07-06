import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required().min(6),
    });

    try {
      if (!(await schema.isValid(req.body))) {
        return res.json({ error: 'Invalid data, try again' });
      }

      const userExists = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExists) {
        return res.status(401).json({ message: 'E-mail already in use' });
      }

      const { id, name, email } = await User.create(req.body);

      return res.json({
        id,
        name,
        email,
      });
    } catch (err) {
      return res.status(400).json({
        message: 'Request failed',
        error: err,
      });
    }
  }
}

export default new UserController();
