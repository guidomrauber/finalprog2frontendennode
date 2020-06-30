import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListarComponent } from './components/listar/listar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MutanteService } from './services/mutante.service' ;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [
    MutanteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
