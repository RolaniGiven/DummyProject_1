import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entity/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>, // ✅ Fix type
  ) {}

  create(todo: Partial<Todo>): Promise<Todo> {
    return this.todoRepository.save(todo);
  }

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  update(id: string, data: Partial<Todo>): Promise<any> {
    return this.todoRepository
      .createQueryBuilder()
      .update()
      .set({ name: data.name })
      .where('id = :id', { id })
      .execute();
  }

  delete(id: string): Promise<any> {
    return this.todoRepository
      .createQueryBuilder()
      .delete()
      .from(Todo)
      .where('id = :id', { id })
      .execute();
  }
}
