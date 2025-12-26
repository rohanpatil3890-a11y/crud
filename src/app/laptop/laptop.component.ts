import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ilaptop } from '../models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {

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

  @ViewChild('laptopItem') laptopItem !: ElementRef;
   EditId !: string;
   isonEditmode : boolean = false;

  laptopArr: Array<Ilaptop> = [

    {
      lname: "Lenovo",
      id: "123"
    },

    {
      lname: "Asus",
      id: "124"
    },

    {
      lname: "Dell",
      id: "125"
    },
  ]


  onlaptopAdd() {

    if (this.laptopItem.nativeElement.value) {
      let lapObj: Ilaptop = {

        lname: this.laptopItem.nativeElement.value,
        id: this.uuid()
      }

      this.laptopArr.push(lapObj)
      this.snackbar.open(`The laptop item with id ${lapObj.id} is created successfully`,"Close",{
        horizontalPosition : "left",
        verticalPosition : "top",
        duration : 2000
      })
      this.laptopItem.nativeElement.value = "";
    }


  }

  trackById(index : number, laptop : Ilaptop){
    return laptop.id
  }

  onRemove(id: string) {
     let getIndex = this.laptopArr.findIndex(l => l.id === id);
     this.laptopArr.splice(getIndex,1);
     this.snackbar.open(`The laptop ietm with id ${id} is removed successfully`,"Close",{
      horizontalPosition : "left",
      verticalPosition : "top",
      duration : 2000
     })
  }

  onEditLaptop(laptop : Ilaptop){

    
    this.laptopItem.nativeElement.value = laptop.lname;
    this.EditId = laptop.id;
    this.isonEditmode = true;
  }

  onUpdateLaptop(){
    
    let UPDATE_LAPTOPOBJ : Ilaptop = {
      lname : this.laptopItem.nativeElement.value,
      id : this.EditId
    }

    let getIndex = this.laptopArr.findIndex(l => l.id === UPDATE_LAPTOPOBJ.id);
    this.laptopArr[getIndex] = UPDATE_LAPTOPOBJ ;
    this.laptopItem.nativeElement.value = "";
    this.isonEditmode = false;
    this.snackbar.open(`The laptop item with id ${UPDATE_LAPTOPOBJ.id} is updated successfully`, "Close",{
      horizontalPosition : "left",
      verticalPosition : "top",
      duration : 2000
    })
  }

}
