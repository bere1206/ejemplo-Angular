import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit { // implements implementación de la interfa

imageWidth:number=50;
imageMargin:number=2;
muestraImg:boolean=true;
listFilter:string='';

productos:IProducto[]=[
  {
    "productoId":1,
    "modelo":'Sentra',
    "descripcion":"auto 4 puertas",
    "marca":"Nissan",
    "year":"Febrero 3 2020",
    "precio":250000,
    "puntos":3.3,
    "ImagenUrl":"https://www.elcarrocolombiano.com/wp-content/uploads/2019/01/20190117-NISSAN-SENTRA-2020-FOTOS-ESPIA-02.jpg"
  },

  {
    "productoId":2,
    "modelo":'Rio',
    "descripcion":"auto 4 puertas",
    "marca":"Kia",
    "year":"Marzo 24 2000",
    "precio":150000,
    "puntos":4.3,
    "ImagenUrl":"https://coches.com/fotos_historicas/kia/Rio-2000/kia_rio_r1.jpg"
  },

  {
    "productoId":3,
    "modelo":'March',
    "descripcion":"auto 2 puertas",
    "marca":"Nissan",
    "year":"Marzo 24 2000",
    "precio":150000,
    "puntos":4.3,
    "ImagenUrl":"https://acnews.blob.core.windows.net/imgnews/medium/NAZ_10d4c722d0de4cf88311a34a6029a4b7.jpg"
  }
]

  constructor() { }

  ShowImagen():void{
    this.muestraImg=!this.muestraImg; //el ! es para cambiar de true a false
  }

  ngOnInit(): void {
  }

}
