import { Injectable } from '@angular/core';

export interface Task{
  desciption : string,
  timestamp : string,
  completed : boolean
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task : Task[] = [];
  constructor() { }
  saveTask(desc:string){
    let date: Date = new Date();
    let ts = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    let tempTask : Task = {
      desciption:desc,
      timestamp:ts,
      completed:false
    }
    this.task.push(tempTask);
  }
  getAllTask(){
    return this.task;
    /*.sort(function(a, b) {
      if (a.timestamp < b.timestamp)
        return 1;
      if (a.timestamp > b.timestamp)
        return -1;
      return 0;
    });*/
  }
  updateStatus(desc:string,ts:string){

  }
}
