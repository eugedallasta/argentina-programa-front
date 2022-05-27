import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usuarios: any;
  usuario = {
    email: '',
    password: '',
    name: ''
  }

  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  registrarse() {
    const { email, password } = this.usuario;
    this.loginService.register(email, password).then(user => {
      console.log("se registro: ", user);
      this.router.navigate(['/portfolio']);
    }).catch(err => {
      console.log(err)
    })
  }

}
