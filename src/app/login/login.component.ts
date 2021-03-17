import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('emailInput') emailInput: ElementRef | any;
  @ViewChild('passwordInput') passwordInput: ElementRef | any;

  email!: string;
  password!: string;

  onSubmit (form: any) {
    if(!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if(form.controls.email.invalid){
        this.emailInput.nativeElement.focus();
        return;
      }

      if(form.controls.password.invalid){
        this.passwordInput.nativeElement.focus();
        return;
      }

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
