import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { HttpService }  from '../service-http/service-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  fg:FormGroup;

  constructor(private router: Router, fb: FormBuilder, private http: HttpService) {
    this.fg = fb.group({
      'USERNAME': [null, Validators.required],
      'PASSWORD': [null, Validators.required]
    });
  }

  USERNAME = new FormControl('', [ Validators.required]);
  PASSWORD = new FormControl('', [ Validators.required]);


  ngOnInit() {

  }

userOrPassWrong = false;

  userDB;
  login(user){
    var url = 'http://127.0.0.1:8080/user-api/get-user';
    this.http.send('GET', url).then(res => {
      this.userDB = JSON.parse(res._body);
      for (let i = 0; i < this.userDB.length; i++){
        if(user.USERNAME == this.userDB[i].USERNAME && user.PASSWORD == this.userDB[i].PASSWORD){
          this.userOrPassWrong = false;

          this.router.navigate(['task']);
        }else{
          this.userOrPassWrong = true;
        }
      }

    }).catch(rej => {
      console.log(rej);
    })

  }

}
