import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {
  nombre:string='';
  comp:number=0;
  cantComp:string='';
  tarjeta:any='';
  cantBol:any='';
  precioBol:any=12;
  total:any='';
  alert:string="";

  constructor() { }

  totalPago():void{
    this.comp=parseInt(this.cantComp)*7;
    if(this.cantBol<=this.comp){

    if (this.cantBol>5) {
      this.total=(parseInt(this.cantBol)*parseInt(this.precioBol))*0.85;
      this.alert=('');
    }else if (this.cantBol>=3 && this.cantBol<=5){
      this.total=(parseInt(this.cantBol)*parseInt(this.precioBol))*0.9;
      this.alert=('');
    }else if (this.cantBol<=2){
      this.total=parseInt(this.cantBol)*parseInt(this.precioBol);
      this.alert=('');
    } 
    if(this.tarjeta=='si'){
      this.total=parseInt(this.total)*0.9;
      this.alert=('');
    }
  }
  else{
    this.alert=('No puedes comprar más de 7 boletos por persona');
    this.total=('');
    this.cantComp=('');
    this.cantBol=('');
  }
  }

  ngOnInit(): void {
  }

}
