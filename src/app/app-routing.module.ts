import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PerfilComponent} from "./components/perfil/perfil.component";
import {RespositoriosComponent} from "./components/respositorios/respositorios.component";
import {SeguidoresComponent} from "./components/seguidores/seguidores.component";

const routes: Routes = [
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'repositorios',
    component: RespositoriosComponent
  },
  {
    path: 'seguidores',
    component: SeguidoresComponent
  },
  {
    path: '**',
    redirectTo: 'perfil'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
