import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SeguidoresComponent } from './components/seguidores/seguidores.component';
import { RespositoriosComponent } from './components/respositorios/respositorios.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    SeguidoresComponent,
    RespositoriosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
