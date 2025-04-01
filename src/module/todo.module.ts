import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Todo } from '../entity/todo.entity';
import { TodosController } from '../controller/todo.controller';
import { TodosService } from '../provider/todo.service';
import { Todo } from 'src/entity/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])], // ✅ Ensure Todo entity is registered
  controllers: [TodosController],
  providers: [TodosService],
  exports: [TodosService], // ✅ Export if used in other modules
})
export class TodosModule {}
