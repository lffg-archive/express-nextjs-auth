import { Handler } from 'express';
import { http } from '../utils';

export const auth: Handler = (req, res, next) => {
  const userData = req.session?.userData;

  if (!userData) {
    return res
      .status(401)
      .json(http.err('Unauthorized access.', 'ERR_UNAUTHORIZED'));
  }

  next();
};
