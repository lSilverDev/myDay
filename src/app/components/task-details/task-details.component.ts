import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { task } from 'src/app/modal/task/task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {

  task: task = {
    task_name: '',
    date: '',
    desc: ''
  }

  constructor(
    private service: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  salveTask() {
    this.service.save_new_deadline(this.task);
    this.clear();
  }

  clear() {
    this.task = {
      task_name: '',
      date: '',
      desc: ''
    }
  }
}
