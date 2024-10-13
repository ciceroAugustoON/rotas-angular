import { NgForOfContext, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  validLogin : boolean = false
  constructor(private router : Router) {}

  onSubmit(form:NgForm) {
    if (!form.invalid) {
      let values = form.value
      if (values.username == "admin" && values.password == 123) {
        this.router.navigate(['/home/' + values.username]);
      } else {
        this.validLogin = true
      }
    }
  }
}
