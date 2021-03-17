import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { pipe } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoginService } from './login.service';

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


  estaCarregando!: boolean;
  erroNoLogin!: boolean;

  constructor(
    private loginService: LoginService,
  ) {}

  onSubmit (form: any) {
    this.erroNoLogin = false;

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

    this.login();
  }

  login(){
    this.estaCarregando = true;

    this.loginService.logar(this.email, this.password)
    .pipe(
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
       response => {
         console.log('Sucesso! Logou!');
       },
       error => {
         this.erroNoLogin = true;
         console.log('Deu ruim! Não logou');
       }
     )
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }
}
