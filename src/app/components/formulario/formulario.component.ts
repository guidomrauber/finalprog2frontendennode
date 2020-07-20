import { Component, OnInit } from '@angular/core';
import { PeticionEnvio} from '../../Model/peticionEnvio';
import { TextEnvio } from '../../Model/peticionEnvio';
import { ResponseG } from '../../Model/responseG';
import { Game } from '../../models/mutante';
import { FormularioService } from '../../services/formulario.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
texten = new TextEnvio();
  peticion = new PeticionEnvio();
  resultado: Array<ResponseG>;
  id: number = 1;
  constructor(private http: FormularioService) { }

  onSubmit(tipo: number) {
    switch ( tipo ) {
      case 1:
      this.postSentServices(this.texten);
      break;
      case 2:
      if(this.peticion.dna == null && this.peticion.condicion == null){
        alert("llene todo los campos de put");
this.putSentServices(this.peticion);
      }else{
       
      }
      break;
    }
}
onchange($event) {
  this.id = $event.target.value;

}


  
  

  postSentServices(body: TextEnvio) {
    this.http.postRespuesta(body).subscribe(
      data => {
        this.resultado = [];
        this.resultado.push(data);
      },
      err => {}
    );

  }
  putSentServices(_body: PeticionEnvio) {
    
      }
}

