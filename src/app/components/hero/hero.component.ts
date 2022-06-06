import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/ipersona';
import { HeroService } from 'src/app/services/hero.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public user: Persona | undefined;
  public editUser: Persona | undefined;

  constructor(private heroService:HeroService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getUser();
  }

  public getUser(): void {
    this.heroService.getUser().subscribe ({
      next: (response: Persona) => {
        this.user = response;
        if (response){
          this.spinner.hide();
        }


      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    });
  }

}
