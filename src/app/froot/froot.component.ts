import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ifroot } from '../models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-froot',
  templateUrl: './froot.component.html',
  styleUrls: ['./froot.component.scss']
})
export class FrootComponent implements OnInit {

  constructor(private snackbar : MatSnackBar) { }

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

   @ViewChild("fruitItem") fruitItem !: ElementRef;

   inonEditMode : boolean = false;

   EditId !: string


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

  onfruitAdd() {

    if (this.fruitItem.nativeElement.value) {
      let fruitObj: Ifroot = {
        fname: this.fruitItem.nativeElement.value,
        id: this.uuid()
      }

      this.fruits.push(fruitObj);
      this.snackbar.open(`THe fruit item with id ${fruitObj.id} is created successfully`, "Close",{
        horizontalPosition : "left",
        verticalPosition : "top",
        duration : 2000
      })
      this.fruitItem.nativeElement.value = "";
    }

  }

  trackById(index : number , fruit : Ifroot){
   return fruit.id
  }

  onRemove(id : string){
   let getIndex = this.fruits.findIndex(f => f.id === id)
      
   this.fruits.splice(getIndex,1)

  this.snackbar.open(`The fruit item with id ${id} is removed successfully`, "Close",{
    horizontalPosition : "left",
    verticalPosition : "top",
    duration : 2000
  })
   
  }

  onEdit(froot : Ifroot){

    this.EditId = froot.id 
    this.fruitItem.nativeElement.value = froot.fname;
    this.inonEditMode = true;
    
  }

  onUpdate(){

    let UPDATE_FRUITOBJ : Ifroot ={
      fname : this.fruitItem.nativeElement.value,
      id : this.EditId
    }
    this.snackbar.open(`The fruit item with id ${UPDATE_FRUITOBJ.id} is updated successfully`,"Close",{
      horizontalPosition : "left",
      verticalPosition : "top",
      duration : 2000
    });
    this.fruitItem.nativeElement.value = "";
    let getIndex = this.fruits.findIndex(f => f.id === UPDATE_FRUITOBJ.id);
    this.fruits[getIndex] = UPDATE_FRUITOBJ
    this.inonEditMode = false;
  }

}
