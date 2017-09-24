import { Component, OnInit } from '@angular/core';
import { HttpService }  from '../service-http/service-http.service';
import { FormControl, FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  fg:FormGroup;
  tasksDate = new Date();

  constructor( fb: FormBuilder, private http: HttpService) {
    this.fg = fb.group({
      'TITLE': [null, Validators.required],
      'BODY': [null, Validators.required],
      "DONE": [false]
    });
  }

  TITLE = new FormControl('', [ Validators.required]);
  BODY = new FormControl('', [ Validators.required]);

  formatDate(da) {
    var d = new Date(da),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    return [month, day, year].join('/');
}

  tasksArr = [];
  add(task, date){
    if(date){
      task.DATE = date;
      console.log(task)
    }else{
      task.DATE = this.formatDate(new Date());
    }

    var url = "http://127.0.0.1:8080/task-api/add-task";
    this.http.send("POST", url, task).then(res => {
      console.log(res);
    }).catch(rej => {
      console.log(rej)
    })

  }

  change(status){
    if(status == true){
      return false;
    }else{
      return true;
    }
  }

  done(title, taskIndex){
    console.log(taskIndex);
    var taskTitle = title;
    var url = 'http://127.0.0.1:8080/task-api/edit-task/' + taskTitle;
    var done ;
    this.tasksArr.forEach((elm, index) =>{
      if(taskIndex == index){
        if(elm.DONE == true){
          done = {DONE: false};
        }else{
          done = {DONE: true};
        }
      }
    })
    this.http.send('PUT', url, done).then(res => {
      var data = JSON.parse(res._body);
      console.log(data);
    }).catch(rej => {
      console.log(rej);
    })
  }

  onChange(e?){
    this.getData(e.value);
  }

  getData(d?){
    this.tasksArr = [];

    var url = 'http://127.0.0.1:8080/task-api/get-task';
    this.http.send('GET', url).then(res => {

      var data = JSON.parse(res._body);
      data.forEach((elm) => {
        elm.DATE = this.formatDate(elm.DATE);
      });

      for(let i = 0; i < data.length; i++){
        if(data[i].DATE == this.formatDate(d)){
          this.tasksArr.push(data[i]);

        }
      }
    }).catch(rej => {
      console.log(rej);
    })

  }

  ngOnInit() {
    var d = new Date();
    this.formatDate(d)
    this.getData(d);




  }

}
