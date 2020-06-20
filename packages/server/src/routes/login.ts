import { Router } from 'express';
import { usersDb } from '../database/users';
import { auth } from '../middlewares/auth';
import { invalidCredentials, http } from '../utils';

export const router = Router();

type LoginBody = Partial<{
  username: string;
  password: string;
}>;

router.post<[], unknown, LoginBody>('/login', (req, res) => {
  const { username, password } = req.body;

  const user = usersDb.find(
    (user) =>
      user.username.toLowerCase() === username?.toLowerCase() &&
      user.password === password
  );

  if (!user) {
    return invalidCredentials(res);
  }

  req.session!.userData = user;

  res.json(
    http.ok(
      { userId: user.id },
      `You are now logged in. Welcome, ${user.username}.`
    )
  );
});

router.post('/logout', auth, (req, res) => {
  req.session!.destroy((err) => {
    if (err) {
      return res
        .status(500)
        .json(
          http.err(
            'Something went wrong with your attempt to log out.',
            'ERR_FAILED_LOGOUT'
          )
        );
    }

    res.json(http.ok(null, 'You are now logged out.'));
  });
});
