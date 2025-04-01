import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { devConfig } from './config/database.config';
import { TodosModule } from './module/todo.module'; // ✅ Import TodosModule

@Module({
  imports: [
    TypeOrmModule.forRoot(devConfig), // ✅ Database Connection
    TodosModule, // ✅ Import Todo Module
  ],
})
export class AppModule {}
