import { Component, OnInit } from '@angular/core';
import { GraficoService } from '../../services/grafico.service';
import { ResponseG } from '../../models/grafico';
import { ChartDataSets, ChartOptions } from 'chart.js';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
public game2json: Game2[];
public pieChartLabels = ['mutante', 'no mutante'];

  public pieChartType = 'pie';

  kk: any = [];

  constructor(private  graficoService: GraficoService) { }
  ngOnInit() {this.getGames();}
  getGames() {
	  this.graficoService.getGames()
      .subscribe(res => {
          this.kk = res;
        },
        err => console.error(err)
      );
                console.log();

              //START: put data in Bar Chart
                  public pieChartData = kk.total; 
            };
            
  }
