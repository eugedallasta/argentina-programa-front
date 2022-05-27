import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  userLogged = this.loginService.getUserLogged();

  constructor(private loginService:LoginService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onLogOut(){
    this.loginService.logout();
  }

  showPhone() {
    this.toastr.info('15 460 7552', 'Phone', {positionClass: 'toast-top-right',tapToDismiss: true,} );
  }
  showEmail() {
    this.toastr.info('mariaedallasta@gmail.com', 'Email', {
    positionClass: 'toast-top-right',
    tapToDismiss: true,
    });
  }



}
