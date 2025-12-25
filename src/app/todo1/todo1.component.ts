import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icar } from '../models/todo';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.scss']
})
export class Todo1Component implements OnInit {

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


  carsArr: Array<Icar> = [

    {
      carname: "Toyota",
      id: "123"
    },
    {
      carname: "Maruti Suzuki",
      id: "124"
    },
    {
      carname: "TATA",
      id: "125"
    }
  ]

 

  @ViewChild("carItem") carItem !: ElementRef

  oncarAdd() {

    if (this.carItem.nativeElement.value) {
      let carObj: Icar = {
        carname: this.carItem.nativeElement.value,
        id: this.uuid()
      }

      this.carsArr.push(carObj);
      this.carItem.nativeElement.value = ""
    }
    


  }

  trackById(index : number, car : Icar){
    return car.id
  }

  onRemove(id : string){
    let getIndex = this.carsArr.findIndex(c => c.id === id)
    this.carsArr.splice(getIndex,1)
  }



}
