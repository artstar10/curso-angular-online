import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit (form: any) {
    if(!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();
      return;
    }

    console.log('Email: ', this.email);
    console.log('Password: ', this.password);
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }
}
