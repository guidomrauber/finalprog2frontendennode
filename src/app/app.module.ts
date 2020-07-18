import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListarComponent } from './components/listar/listar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { ChartsModule } from 'ng2-charts';
import { FormsModule }   from '@angular/forms';
import { FormularioService } from './services/formulario.service';
import { AgregarService } from './services/agregar.service';
import { GoogleChartsModule } from 'angular-google-charts';
 
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
  HttpClientModule,
  ChartsModule,
  GoogleChartsModule,
  FormsModule
  ],
  providers: [FormularioService,AgregarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
