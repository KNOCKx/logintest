import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Register {
  email: string
  password: string
  id?: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerFormVal = {
    registerEmail : '',
    registerPassword : '',
    registerId: ''
  }

  constructor(private http: HttpClient) {
  }
  registers: Register[] = []

  ngOnInit(): void {
  }
  registerFunc(){
    let registerVal: Register = {
      email: this.registerFormVal.registerEmail,
      password: this.registerFormVal.registerPassword,
      id: this.registerFormVal.registerId
    }
    let emailCheck = !this.registerFormVal.registerEmail.trim()
    let passwordCheck = !this.registerFormVal.registerPassword.trim()
    if(emailCheck && passwordCheck){
      alert('email & password are empty')
    }else if(emailCheck){
      alert('email is empty')
    }else if(passwordCheck){
      alert('password is empty')
    }else{
      this.http.post<Register>('http://localhost:3000/logins',registerVal).subscribe(register => {
      this.registers.push(register)

      this.registerFormVal.registerEmail=''
      this.registerFormVal.registerPassword=''
      alert('Register passed'+this.registerFormVal.registerEmail+this.registerFormVal.registerPassword)
    })
    }
    
    
    
    
  }
}