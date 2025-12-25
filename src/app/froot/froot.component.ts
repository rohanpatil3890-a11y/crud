import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ifroot } from '../models/todo';

@Component({
  selector: 'app-froot',
  templateUrl: './froot.component.html',
  styleUrls: ['./froot.component.scss']
})
export class FrootComponent implements OnInit {

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


  fruits: Array<Ifroot> = [
    {
      fname: "Apple",
      id: "301"
    },
    {
      fname: "Banana",
      id: "302"
    },
    {
      fname: "Mango",
      id: "303"
    }
  ];


  @ViewChild("fruitItem") fruitItem !: ElementRef;

  onfruitAdd() {

    if (this.fruitItem.nativeElement.value) {
      let fruitObj: Ifroot = {
        fname: this.fruitItem.nativeElement.value,
        id: this.uuid()
      }
      this.fruits.push(fruitObj);
      this.fruitItem.nativeElement.value = "";
    }

  }

  trackById(index : number , fruit : Ifroot){
   return fruit.id
  }

  onRemove(id : string){
   let getIndex = this.fruits.findIndex(f => f.id === id)
      
   this.fruits.splice(getIndex,1)
   
  }

}
