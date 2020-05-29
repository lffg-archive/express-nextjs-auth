import { Response } from 'express';

export function invalidCredentials(res: Response) {
  res.status(401).json({
    error: {
      message: 'Invalid credentials'
    }
  });
}
