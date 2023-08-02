import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  async onSubmit() {
    try {
      const email = this.loginForm.get('email')?.value;
      const senha = this.loginForm.get('senha')?.value;
      await this.authService.login(email, senha);
      alert("Usuário logado!");
    } catch (e) {
      alert("Credenciais inválidas!");
    }
  }

}
