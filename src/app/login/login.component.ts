import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
export interface LogIn {
  email: string
  password: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormVal = {
    loginEmail : '',
    loginPassword : ''
  }
  constructor(private http: HttpClient) {
  }
  logins: LogIn[] = []

  ngOnInit(): void {
  }
  loginFunc(){
    let loginVal: LogIn = {
      email: this.loginFormVal.loginEmail,
      password: this.loginFormVal.loginPassword
    }
    this.http.get<LogIn[]>('http://localhost:3000/logins').subscribe(logins => {
      this.logins=logins
      
      for (let el of logins) {
          if (el.email === loginVal.email && el.password === loginVal.password) {
          console.log('email true & password true')
          document.querySelector('.successicondis1').classList.add('successicon');
          document.querySelector('.successicondis2').classList.add('successicon');
          document.querySelector('.email').classList.add('success');
          document.querySelector('.password').classList.add('success');
          document.querySelector('.erroricondis1').classList.remove('erroricon');
              document.querySelector('.invalid').classList.remove('o1');
          break;
        }else{
              document.querySelector('.erroricondis1').classList.add('erroricon');
              document.querySelector('.invalid').classList.add('o1');

              document.querySelector('.successicondis1').classList.remove('successicon');
          document.querySelector('.successicondis2').classList.remove('successicon');
          document.querySelector('.email').classList.remove('success');
          document.querySelector('.password').classList.remove('success');
              console.log('false')
              break;
            }
        
        
      }
  })
    
    
    
  }
}