import { Component } from '@angular/core';
import { task } from 'src/app/modal/task/task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  search: string = "";

  constructor(private service: TaskService){}

  async searchCard(){
    let list = await this.service.deadline_getlist();
    list.forEach(element => {
      if(element['task_name'] == this.search){
        alert("");
      }
    });
  }
}
