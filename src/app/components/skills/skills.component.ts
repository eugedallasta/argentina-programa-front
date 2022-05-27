import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/iskills';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills: Skills[] = [];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.skillsService.getSkills().subscribe({
      next: (response: Skills[]) => {
        this.skills = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

}
