import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = ['task1'];

  getAllTasks() {
    return this.tasks;
  }
}
