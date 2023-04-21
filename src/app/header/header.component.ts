import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private taskService:TaskService) { }
  ngOnInit(): void {
  }
  task :string ="";
  submit(){
    let date: Date = new Date();
    let timeStamp = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    console.log(timeStamp);
    this.taskService.saveTask(this.task);
    this.task='';
  }
}
