import { Component, OnInit } from '@angular/core';
import { HttpService }  from '../service-http/service-http.service';
import { FormControl, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fg: FormGroup;
  users = [];

  constructor(private http: HttpService, private fb: FormBuilder, private router: Router) {

    this.fg = fb.group({
      'FIRST_NAME': [null, Validators.required],
      'LAST_NAME': [null, Validators.required],
      'EMAIL': [null, Validators.required],
      'USERNAME': [null, Validators.compose([Validators.required])],
      'PASSWORD': [null, Validators.required]
    })
  }


  usernameStatus;

  addUser(value){

    var url = "http://127.0.0.1:8080/user-api/add-user";
    this.http.send("POST", url, value).then(res => {
      this.router.navigate(['login']);
    }).catch(rej => {
      console.log(rej);
    })

  }


  ngOnInit() {
    var url = 'http://127.0.0.1:8080/user-api/get-user';
    this.http.send('GET', url).then(res => {
      var usersDB = JSON.parse(res._body);
      for (let i = 0; i < usersDB.length; i++){
        this.users.push(usersDB[i].USERNAME);
      }
    }).catch(rej => {
      console.log(rej);
    })

  }
}
