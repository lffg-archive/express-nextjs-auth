import * as connectRedis from 'connect-redis';
import * as expressSession from 'express-session';
import * as redis from 'redis';
import { env } from '../utils';

const RedisStore = connectRedis(expressSession);

const redisClient = redis.createClient({
  host: env.get('REDIS_SESSION_HOST'),
  port: parseInt(env.get('REDIS_SESSION_PORT'), 10),
  prefix: env.get('REDIS_SESSION_PREFIX')
});

export function session() {
  return expressSession({
    store: new RedisStore({ client: redisClient }),
    cookie: {
      path: '/',
      httpOnly: true,
      sameSite: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 30 * 3 // 3 months
    },
    secret: env.get('SESSION_SECRET'),
    name: env.getDefault('SESSION_NAME', 'sid'),
    saveUninitialized: false,
    resave: false
  });
}
