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
  
    server = app.listen(3333, () =>
      console.log(`Server running at http://localhost:${3333}`),
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
