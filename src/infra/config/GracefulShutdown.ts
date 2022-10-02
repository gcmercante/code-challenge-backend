import { Server } from 'http';
import { AppDataSource } from '../db';

export async function gracefulShutdown(server: Server) {
  await AppDataSource.destroy();
  server.close();

  console.log('Wait 5 seconds while the system safely shuts down');
  setTimeout(() => {
    console.log('System off');
    process.exitCode = 1;
  }, 5000);
}