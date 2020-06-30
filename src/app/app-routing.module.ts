import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { FormularioComponent } from './components/formulario/formulario.component';


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
    path: 'LISTADO/edit/:id',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
