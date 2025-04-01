import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Todo } from '../entity/todo.entity';

export const devConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'Given@20/09/03',
  database: process.env.DB_NAME || 'todosDB',
  entities: [Todo], // ✅ Register Todo entity
  synchronize: true, // ⚠️ Disable in production
};
