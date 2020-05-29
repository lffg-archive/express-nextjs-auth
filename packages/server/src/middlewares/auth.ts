import { Handler } from 'express';

export const auth: Handler = (req, res, next) => {
  const userData = req.session?.userData;

  if (!userData) {
    return res.status(401).json({
      error: {
        message: 'Forbidden unauthenticated access.',
        code: 'ERR_UNAUTHENTICATED'
      }
    });
  }

  next();
};
