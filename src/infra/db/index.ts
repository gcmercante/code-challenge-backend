import "dotenv/config";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.NODE_ENV === 'test' ? 'test' : process.env.DB_NAME,
  schema: process.env.DB_SCHEMA,
  synchronize: false,
  logging: false,
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
  entities: [`${__dirname}/entities/*.{ts,js}`],
})