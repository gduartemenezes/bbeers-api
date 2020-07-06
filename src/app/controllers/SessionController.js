import User from '../models/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = User.findOne({ where: { email } });

    if (!user) return res.status(400).json({ error: 'E-mail does not match' });

    if (!(await user.checkPassword(password)))
      return res.status(400).json({ error: 'Password does not match' });

    const { id, name } = user;

    return res.json({
      id,
      name,
    });
  }
}

export default SessionController;
