import 'reflect-metadata';
import { Server } from 'http';

import { gracefulShutdown } from '../config/GracefulShutdown';
import { AppDataSource } from '../db';

let server: Server;

AppDataSource.initialize()
  .then(async() => {
    console.log('Database connected');
    const { setupApp } = await import('../config/app');
    const app = await setupApp();
  
    server = app.listen(process.env.APP_PORT, () =>
      console.log(`Server listening to port ${process.env.APP_PORT}`),
    );
  })
  .catch((error) => console.error(error));
  
process
  .on('SIGTERM', async () => {
    await gracefulShutdown(server);
  })
  .on('uncaughtException', async (err) => {
    console.error(`${err.message}`);
    await gracefulShutdown(server);
  });
