import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {Perfil} from "../interfaces/perfil.interface";

@Injectable({
  providedIn: 'root'
})

export class GithubService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerPerfilGithub(): Observable<Perfil>{
    return this.http.get<Perfil>(`${ environment.URL_BASE }users/soRodriguezz`);
  }

  obtenerRepositoriosGithub(): Observable<any>{
    return this.http.get<any>(`${ environment.URL_BASE }users/soRodriguezz/repos`);
  }
}
