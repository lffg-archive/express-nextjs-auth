import { Router } from 'express';
import { usersDb } from '../database/users';
import { auth } from '../middlewares/auth';

export const router = Router();

router.get('/me', auth, (req, res) => {
  const { id } = req.session?.userData!;

  const user = usersDb.find((user) => user.id === id);

  res.json({
    data: {
      user
    }
  });
});
