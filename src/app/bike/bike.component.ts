import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ibike } from '../models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.scss']
})
export class BikeComponent implements OnInit {

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

    @ViewChild('bikeItem') bikeItem !: ElementRef;
    EditId !: string;
    isonEditMode : boolean = false;
    


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



  onAddBike() {

    if (this.bikeItem.nativeElement.value) {
      let BikeObj: Ibike = {

        bname: this.bikeItem.nativeElement.value,
        id: this.uuid()
      }
      this.bikesArr.push(BikeObj);
      this.snackbar.open(`The bike item with id ${BikeObj.id} is created succeesfully`,"Close",{
        horizontalPosition : "left",
        verticalPosition : "top",
        duration : 2000
      })
      this.bikeItem.nativeElement.value = ""
    }
  }

  trackById(index : number, bike : Ibike){
     return bike.id
  }

  onRemove(id : string){
    let getIndex = this.bikesArr.findIndex(b => b.id === id)

    this.bikesArr.splice(getIndex,1);
    this.snackbar.open(`The bike item with id ${id} is removed successfully`,"Close",{
      horizontalPosition : "left",
      verticalPosition : "top",
      duration : 2000
    })
  }

  onEdit(bike : Ibike){
    this.bikeItem.nativeElement.value = bike.bname;
    this.EditId = bike.id
    this.isonEditMode = true;
  }

  onUpdateBike(){

    let UPDATE_BIKEOBJ : Ibike = {
      bname : this.bikeItem.nativeElement.value,
      id : this.EditId
    }

     let getIndex = this.bikesArr.findIndex(b => b.id === UPDATE_BIKEOBJ.id);
     this.bikesArr[getIndex] = UPDATE_BIKEOBJ;
     this.bikeItem.nativeElement.value = "";
     this.isonEditMode = false;
     this.snackbar.open(`The bike item with id ${UPDATE_BIKEOBJ.id} is updated successfully` ,"Close",{
      horizontalPosition : "left",
      verticalPosition : "top",
      duration : 2000
     })
  }

}
