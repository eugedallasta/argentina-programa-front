import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user= {
    email: '',
    password: ''
  }
  constructor(private loginService:LoginService, private router: Router) {}


  ngOnInit(): void {}

  onLogin() {
    const { email, password } = this.user;
    this.loginService.login(email, password).then(res => {
      console.log('se logeo --->', res);
      this.router.navigate(['/portfolio']);
    })
  }

  onLoginGoogle() {
    const { email, password } = this.user;
    this.loginService.loginWithGoogle(email, password).then(res => {
      console.log('se logeo --->', res);
      this.router.navigate(['/portfolio']);
    })
  }

  onLoginGitHub() {}


}
