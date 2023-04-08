import express from 'express';
import cors from 'cors';
import cokieParser from 'cookie-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';

import notFoundRoutes from './routes/not-found.routes';
import routes from './routes/routes';

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(cokieParser());
app.use(morgan('dev'));

// NOT FOUND ROUTES

app.use(routes);
app.use('*', notFoundRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
