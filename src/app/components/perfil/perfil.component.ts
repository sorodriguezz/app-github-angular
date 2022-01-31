import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Perfil } from '../../interfaces/perfil.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public data!: Perfil;
  public propiedadModal: any;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.obtenerPerfilGithub();
  }

  private obtenerPerfilGithub() {
    this.githubService.obtenerPerfilGithub().subscribe((resp) => {
      this.data = resp;
    });
  }

  public abrirModal(tipo: any) {
    this.propiedadModal = 'block';
  }

  public cambioEstado(estado: any) {
    this.propiedadModal = estado;
  }
}
