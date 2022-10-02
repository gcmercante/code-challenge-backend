import express, { Express, Request, Response, NextFunction } from 'express';
import { router } from '../http/routes';

import '../../shared/container';

export async function setupApp(): Promise<Express> { 
  const app = express();

  app.use(express.json());

  app.use('/v1', router);

  app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof Error) {
        // return response.status(err.statusCode).json({ message: err.message });
      }

      return response.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`,
      });
    },
  );

  return app;
}