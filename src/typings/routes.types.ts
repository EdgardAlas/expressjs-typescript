import { Request, Response } from 'express';

export type Controller = {
  [key: string]: (req: Request, res: Response) => any;
};

// @ts-ignore
export interface CustomRequest<Body, Param, Query> extends Request {
  body?: Body;
  params?: Param;
  query?: Query;
}
