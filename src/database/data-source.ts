import { DataSource } from 'typeorm';

import * as dotenv from 'dotenv';
import { User } from 'src/modules/user/entities/user.entity';
import { Stock } from 'src/modules/stocks/entities/stock.entity';
import { Auth } from 'src/modules/auth/entities/auth.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Stock, Auth],
  // migrations: ['src/database/migrations/*.{ts,js}'],
  synchronize: false,
});
