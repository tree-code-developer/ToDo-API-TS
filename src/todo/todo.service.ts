import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}
  createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo: Todo = new Todo();
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    todo.isDone = createTodoDto.isDone;
    return this.todoRepository.save(todo);
  }

  findAllTodo(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findTodo(id: number): Promise<Todo> {
    return this.todoRepository.findOneBy({ id });
  }

  updateTodo(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo: Todo = new Todo();
    todo.title = updateTodoDto.title;
    todo.description = updateTodoDto.description;
    todo.isDone = updateTodoDto.isDone;
    todo.id = id;
    return this.todoRepository.save(todo);
  }

  removeTodo(id: number): Promise<{ affected?: number }> {
    return this.todoRepository.delete(id);
  }
}
