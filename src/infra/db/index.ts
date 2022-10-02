import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'q1w2e3',
  database: process.env.NODE_ENV === 'test' ? 'todo_test' : 'todo',
  schema: 'todo',
  synchronize: false,
  logging: false,
  migrations: [`${__dirname}/migrations/*.ts`],
  entities: [`${__dirname}/entities/*.ts`],
})