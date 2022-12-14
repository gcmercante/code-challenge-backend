import 'express-async-errors';
import cors from 'cors';
import express, { Express, Request, Response, NextFunction } from 'express';

import { router } from '../http/routes';
import '../../shared/container';
import { AppError } from '../../shared/errors/AppError';

export async function setupApp(): Promise<Express> { 
  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use('/v1', router);

  app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({ message: err.message });
      }

      return response.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`,
      });
    },
  );

  return app;
}