import { Pipe, PipeTransform } from '@angular/core';
import { IProducto } from './producto';

@Pipe({ //función especial que hace un proceso que tú le indicas
  name: 'productoFiltro'
})
export class ProductoFiltroPipe implements PipeTransform {

  transform(value: IProducto[], args:string):IProducto[] {
    let filter:string=args ? args.toLocaleLowerCase():'';

    return filter ? value.filter((product:IProducto)=>
    product.modelo.toLocaleLowerCase().indexOf(filter) != -1):value;
  }

}
