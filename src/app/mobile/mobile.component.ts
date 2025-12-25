import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Imobile } from '../models/todo';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  uuid = () => {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      character => {
        const random = (Math.random() * 16) | 0
        const value = character === 'x' ? random : (random & 0x3) | 0x8
        return value.toString(16)
      }
    )
  }


  mobiles: Array<Imobile> = [
    {
      brand: "Samsung",
      id: "401"
    },
    {
      brand: "Apple",
      id: "402"
    },
    {
      brand: "OnePlus",
      id: "403"
    }
  ];

  @ViewChild('mobileItem') mobileItem !: ElementRef;

  onmobileAdd() {

    if (this.mobileItem.nativeElement.value) {
      let MobObj: Imobile = {
        brand: this.mobileItem.nativeElement.value,
        id: this.uuid()
      }

      this.mobiles.push(MobObj);
      this.mobileItem.nativeElement.value = ""
    }
  }

  trackById(index : number, mobile : Imobile){
     return mobile.id
  }

  onRemove(id : string){
    let getIndex = this.mobiles.findIndex(m => m.id === id)
    this.mobiles.splice(getIndex, 1)
  }

}
