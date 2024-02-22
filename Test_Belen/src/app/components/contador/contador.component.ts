import { Component, Input, OnInit } from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs';

const unseg:Observable<number> = interval(1000);

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  
  @Input() title:string = "defecto";

  @Input() inicio:number = 0;  
  @Input() valor:number = 0;

  obs?: Subscription;

  constructor() {
    this.obs = unseg.subscribe(
      (x)=>{ this.valor++; }      
    )
    //console.log("en el consturctor inicio es ", this.inicio )
  }

  ngOnInit(): void {
    this.valor = this.inicio;
    
   //  console.log("que tienes en inicio ", this.inicio)
  }

}
