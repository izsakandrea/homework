import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  alert(){
    alert("Bad news");
  }

  onSubmit(){
    if(this.loginForm.valid){
      if(this.loginForm.controls['username'].value === 'izsak.andrea@marktsoft.hu'
      && this.loginForm.controls['password'].value === 'asdfg123') {
        this.router.navigate(['/welcome']);
      }
      else alert("Username or Password is incorrect!")
    } else{

      //console.log("Form is invalid");
      ValidateForm.validateAllFormFields(this.loginForm);
      alert("Your form is invalid");
    }
  }

}
