import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ibike } from '../models/todo';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})
export class BikeComponent implements OnInit {

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


  bikesArr: Array<Ibike> = [
    {
      bname: "Royal Enfield",
      id: "123"
    },
    {
      bname: "KTM Duke 390",
      id: "124"
    },
    {
      bname: "Bajaj Pulsar NS200",
      id: "125"
    }
  ]

  @ViewChild('bikeItem') bikeItem !: ElementRef;

  onAddBike() {

    if (this.bikeItem.nativeElement.value) {
      let BikeObj: Ibike = {

        bname: this.bikeItem.nativeElement.value,
        id: this.uuid()
      }
      this.bikesArr.push(BikeObj);
      this.bikeItem.nativeElement.value = ""
    }
  }

  trackById(index : number, bike : Ibike){
     return bike.id
  }

  onRemove(id : string){
    let getIndex = this.bikesArr.findIndex(b => b.id === id)

    this.bikesArr.splice(getIndex,1)
  }

}
