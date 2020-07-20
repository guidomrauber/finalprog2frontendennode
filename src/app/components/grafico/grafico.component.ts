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
import { Game } from 'src/app/models/mutante';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
public game2json: ResponseG[];
public pieChartLabels = ['mutante', 'no mutante'];
public pieChartData : number[];
  public pieChartType = 'pie';
  
  kk: any = [];

  constructor(private  graficoService: GraficoService) { }
  ngOnInit() {this.getGames();}
  getGames() {
	  this.graficoService.getGames()
      .subscribe(res => {
          this.kk = res;
          const kkk = res[0].total;
          const jjj = res[1].total;
          this.pieChartData =[res[0].total,res[1].total];
        },
        err => console.error(err)
      );
                console.log(this.kk[0].total);

              //START: put data in Bar Chart
                  
            };
            
  }
