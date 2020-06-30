import { Component, OnInit } from '@angular/core';
import { MutanteService } from '../../services/mutante.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

games: any = [];

  constructor(private mutanteService: MutanteService) { }

  ngOnInit() {
	  this.getGames();
  }

  getGames() {
    this.mutanteService.getGames()
      .subscribe(
        res => {
          this.games = res;
        },
        err => console.error(err)
      );
  }

  deleteGame(id: string) {
    this.mutanteService.deleteGame(id)
      .subscribe(
        res => {
          console.log(res);
          this.getGames();
        },
        err => console.error(err)
      )
  
  }

}
