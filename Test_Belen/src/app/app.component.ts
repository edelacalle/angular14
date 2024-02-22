import { Component } from '@angular/core';

interface contadorInterface{
  id:number,
  title:string,
  inicio:number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  auxPadre: string = "Menu principal";
  title = '03_Componentes';

  aContadores:contadorInterface[] = [
    {id:1, title:"C. Madrid", inicio:0  },
    {id:2, title:"C. New York", inicio:12 },
    {id:3, title:"C. Valencia", inicio:45 },
    {id:4, title:"", inicio:0 },
  ] 
}
