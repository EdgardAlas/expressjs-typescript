import { body } from 'express-validator';
import { validateResult } from '../middlewares/express-validator-validate';

export const bodyValidation = [
  body('name').isString().withMessage('Name must be a string'),
  body('email').isEmail().withMessage('Email must be a valid email'),
  validateResult,
];
