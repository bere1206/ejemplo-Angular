import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  num:any='';
  tabla:string='';
  multiplicador:number=0;

  constructor() { }
  table():void{
    this.tabla="";
    for(let i = 1; i<=10;){
      this.tabla+=(this.num + " X " + i + " = " + this.num * i + "<br>");
      i++;
    }
  }

  ngOnInit(): void {
  }

}
