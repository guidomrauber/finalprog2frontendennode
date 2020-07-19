import { Component, OnInit } from '@angular/core';
import { PeticionEnvio} from '../../Model/peticionEnvio';
import { TextEnvio } from './Model/peticionEnvio';
import { ResponseG } from '../../Model/resultado';
import { Game } from '../../models/mutante';
import { FormularioService } from '../../services/formulario.service';
import { AgregarService } from '../../services/agregar.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
texten = new TextEnvio();
  peticion = new PeticionEnvio();
  resultado: Array<ResponseG>;
  id: number = 1;
  constructor(private http: FormularioService) { }

  onSubmit(tipo: number) {
    switch ( tipo ) {
      case 1:
      this.postSentServices(this.Texten);
      break;
      case 2:
      if(this.peticion.dna == null && this.peticion.condicion == null){
        alert("llene todo los campos de put");

      }else{
        this.putSentServices(this.peticion, this.id);
      }
      break;
    }
}
onchange($event) {
  this.id = $event.target.value;

}


  
  }

  postSentServices(body: TextEnvio) {
    this.phttp.postRespuesta(body).subscribe(
      data => {
        this.resultado = [];
        this.resultado.push(data);
      },
      err => {}
    );

  }
  putSentServices(body: PeticionEnvio) {
    this.phttp.putRespuesta(body).subscribe(
      data => {
        this.resultado = [];
        this.resultado.push(data);
      },
      err => {}
    );
  }
}
