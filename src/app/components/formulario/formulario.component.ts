import { Component, OnInit } from '@angular/core';
import { comprobador} from '../../models/comprobador';
import { ResponseG } from '../../models/resultado';
import { Game } from '../../models/mutante';
import { FormularioService } from '../../services/formulario.service';
import { AgregarService } from '../../services/agregar.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
peticion = new comprobador();
  
  
  resultado: Array<ResponseG>;
  id: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
