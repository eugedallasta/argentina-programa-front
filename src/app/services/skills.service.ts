import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../models/iskills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.apiServerUrl}skills/all`);
  }
  public addSkill(skills:Skills):Observable<Skills>{
    return this.http.post<Skills>(`${this.apiServerUrl}skills/add`,skills);
  }

  public updateSkill(skills:Skills):Observable<Skills>{
    return this.http.put<Skills>(`${this.apiServerUrl}skills/update`,skills);
  }

  public deleteSkill(idSkill:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}skills/delete/${idSkill}`);
  }

}
