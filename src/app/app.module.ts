import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListarComponent } from './components/listar/listar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { GraficoComponent } from './components/grafico/grafico.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarComponent,
    FormularioComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
