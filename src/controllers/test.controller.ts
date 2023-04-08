import { RequestHandler } from 'express';

export const pong: RequestHandler = (req, res) => {
  return res.json({
    message: 'pong',
  });
};

export const home: RequestHandler = (req, res) => {
  return res.json({
    message: 'Hello World',
  });
};
