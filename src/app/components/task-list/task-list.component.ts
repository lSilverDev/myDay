import { Component } from '@angular/core';
import { DocumentData } from 'firebase/firestore';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  taskList: DocumentData[] = [];

  constructor(private service: TaskService){}

  ngOnInit(){
    this.getTask();
  }

  async getTask(){
    let list = await this.service.deadline_getlist();

    list.forEach(element => {
     this.taskList.push(element)
    });
   }
}
