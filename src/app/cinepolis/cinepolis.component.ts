import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {
  nombre:string='';
  cantComp:number=0;
  tarjeta:any='';
  cantBol:any='';
  precioBol:any=12;
  total:any=0;
  total2:number=0;

  constructor() { }

  totalPago():void{
    if (this.cantBol>5) {
      this.total=(parseInt(this.cantBol)*parseInt(this.precioBol))*0.85;
    }else if (this.cantBol>=3 && this.cantBol<=5){
      this.total=(parseInt(this.cantBol)*parseInt(this.precioBol))*0.9;
    }else if (this.cantBol<=2){
      this.total=parseInt(this.cantBol)*parseInt(this.precioBol);
    }else if(this.tarjeta.onclick('true')){
      this.total=parseInt(this.total)*.9;
    }
  }

  ngOnInit(): void {
  }

}
