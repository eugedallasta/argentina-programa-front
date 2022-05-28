import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/ipersona';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public user: Persona | undefined;
  public editUser: Persona | undefined;

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getUser();
  }

  public getUser(): void {
    this.heroService.getUser().subscribe ({
      next: (response: Persona) => {
        this.user = response;
        console.log(this.user.descripcion);


      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    });
  }

}
