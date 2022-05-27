import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experiencia } from 'src/app/models/iexperiencia';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public experience: Experiencia[] = [];
  public editExperience: Experiencia | undefined;
  public deleteExperience: Experiencia | undefined;

  constructor(private experienceService:ExperienceService) { }

  ngOnInit(): void {
    this.getExperience();
  }

  getExperience(): void {
    this.experienceService.getExperience().subscribe({
      next: (response: Experiencia[]) => {
        this.experience = response;

      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public onOpenModal(mode:String, experience?:Experiencia):void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if(mode === 'add'){

    }else if(mode === 'delete'){
      this.deleteExperience = experience;

    }else if(mode === 'edit'){
      this.editExperience = experience;

    }
    container?.appendChild(button);
    button.click();

  }

  onAddExperience(addForm:NgForm) {
    document.getElementById('add-experience-form')?.click();
    this.experienceService.addExperience(addForm.value).subscribe({
      next: (response: Experiencia) => {
        this.getExperience();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    });
  }

  public onUpdateExperience(experience:Experiencia){
    this.editExperience = experience;
    document.getElementById('edit-experience-form')?.click();
    this.experienceService.updateExperience(experience).subscribe({
      next: (response: Experiencia) => {
        this.getExperience();

      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onDeleteExperience(idExp:number):void{
    this.experienceService.deleteExperience(idExp).subscribe({
      next: (response: void) => {
        this.getExperience();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

}
