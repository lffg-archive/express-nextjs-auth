import { Router } from 'express';

export const router = Router();

router.get('/me', (_, res) => {
  res.json({
    data: {
      user: {
        // TODO: Get user from session.
      }
    }
  });
});
