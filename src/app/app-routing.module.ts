import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { GraficoComponent} from './components/grafico/grafico.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/LISTADO',
    pathMatch: 'full'
  },
  {
    path: 'LISTADO',
    component: ListarComponent 
  },
  {
    path: 'LISTADO/add',
    component: FormularioComponent
  },
  {
    path: 'LISTADO/grafico',
    component: GraficoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }