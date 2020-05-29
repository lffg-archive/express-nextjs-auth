import { Router } from 'express';
import { usersDb } from '../database/users';
import { invalidCredentials } from '../utils';

export const router = Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = usersDb.find(
    (user) =>
      user.username.toLowerCase() === username.toLowerCase() &&
      user.password === password
  );

  if (!user) {
    return invalidCredentials(res);
  }

  // TODO: Create session.

  res.json({
    data: {
      message: `You are now logged in. Welcome, ${user.username}.`,
      userId: user.id
    }
  });
});

router.post('/logout', (req, res) => {
  // TODO: Destroy session.

  res.json({
    data: {
      message: `You are now logged out.`
    }
  });
});
