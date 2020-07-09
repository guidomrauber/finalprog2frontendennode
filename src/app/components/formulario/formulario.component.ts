import { Component, OnInit } from '@angular/core';
declare var server: any;
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.mutant();

  }

  mutant(){
    new server();

  };
}
