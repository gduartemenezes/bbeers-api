import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
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
