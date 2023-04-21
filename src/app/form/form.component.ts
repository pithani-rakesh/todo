import { Component, OnInit ,Input } from '@angular/core';
import { Task, TaskService } from '../task.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Tasks : Task[] = this.taskService.getAllTask();;
  table :boolean =true;
  constructor(private taskService : TaskService) { }
  tab = 'All';
  ngOnInit(): void {
  }
  submit(){
    this.table=true;
    this.Tasks = this.taskService.getAllTask();
  }
  completed(t:Task){
    t.completed = !t.completed;
    console.log(t.desciption,"completed");
  }
  showAll(){
    return this.taskService.getAllTask();
  }
  showDoneTask(){
    let task : Task[] = [];
    for(let t of this.Tasks){
      if(t.completed)
        task.push(t);
    }
    return task;
  }
  showNotDoneTask(){
    let task : Task[] = [];
    for(let t of this.Tasks){
      if(!t.completed)
        task.push(t);
    }
    return task;
  }

  getFilterdTask(){
    switch (this.tab) {
      case 'All':
        return this.Tasks;
      case 'Done':
        return this.Tasks.filter(task => task.completed);
      case 'Not Done':
        return this.Tasks.filter(task => !task.completed);
      default:
        return null;
    }
  }



}
