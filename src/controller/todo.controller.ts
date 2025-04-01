import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { TodosService } from '../provider/todo.service';

interface CreateTodoDto {
  name: string;
  complete: boolean;
}

@Controller('todos') 
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    const todo = await this.todosService.create(createTodoDto);
    return todo ? 'Todo created successfully' : 'Error creating todo';
  }

  @Get()
  async findAll(@Req() request: Request) {
    return this.todosService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: Partial<CreateTodoDto>) {
    await this.todosService.update(id, body);
    return 'Todo updated';
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.todosService.delete(id);
    return 'Todo deleted';
  }
}
