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

      const { email } = req.body;
      const userExists = User.findOne({ where: { email } });

      if (userExists)
        return res.status(401).json({ message: 'E-mail already in use' });

      const user = await User.create(req.body);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({
        message: 'Request failed',
        error: err,
      });
    }
  }
}

export default new UserController();
