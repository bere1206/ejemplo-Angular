import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //Permite crear un layout o página principal
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ejemplo-Angular';
  nombre:string="Isela";
  escuela:string="UTL";
}
