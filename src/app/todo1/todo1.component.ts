import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icar } from '../models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.scss']
})
export class Todo1Component implements OnInit {

  constructor( private snackbar : MatSnackBar) { }

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

  isinEditMode : boolean = false

  EditId !: string

  oncarAdd() {

    if (this.carItem.nativeElement.value) {
      let carObj: Icar = {
        carname: this.carItem.nativeElement.value,
        id: this.uuid()
      }

      this.carsArr.push(carObj);
      this.snackbar.open(`The car item with id ${carObj.id} is created successfully`,"Close",{
        horizontalPosition : "left",
        verticalPosition : "top",
        duration : 2000
      })
      this.carItem.nativeElement.value = ""
    }
    


  }

  trackById(index : number, car : Icar){
    return car.id
  }

  onRemove(id : string){
    let getIndex = this.carsArr.findIndex(c => c.id === id)
    this.carsArr.splice(getIndex,1);
    this.snackbar.open(`The car item with id ${id} is removed successfully`,"Close",{
      horizontalPosition : "left",
      verticalPosition : "top",
      duration : 2000
    })
  }

  onEdit(car : Icar){

    this.EditId = car.id
    this.carItem.nativeElement.value = car.carname;
    this.isinEditMode = true
    
  }

  OnUpdate(){

    let UPDATE_CAROBJ : Icar= {

      carname : this.carItem.nativeElement.value,
      id :this.EditId
    }

    this.snackbar.open(`The car item with id ${UPDATE_CAROBJ.id} is updated successfully`, "Close",{
      horizontalPosition : "left",
      verticalPosition : "top",
      duration : 2000
    })



    let getIndex = this.carsArr.findIndex(c => c.id === UPDATE_CAROBJ.id);

    this.carsArr[getIndex] = UPDATE_CAROBJ;

    this.carItem.nativeElement.value = "";
  }



}
