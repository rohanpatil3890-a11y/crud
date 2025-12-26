import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Imobile } from '../models/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

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

  @ViewChild('mobileItem') mobileItem !: ElementRef;

  inisEditMode: boolean = false;
  EditId !: string


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



  onmobileAdd() {

    if (this.mobileItem.nativeElement.value) {
      let MobObj: Imobile = {
        brand: this.mobileItem.nativeElement.value,
        id: this.uuid()
      }

      this.mobiles.push(MobObj);
      this.snackbar.open(`The mobile Item With Id ${MobObj.id} is created successfully`, "Close", {
        horizontalPosition: "left",
        verticalPosition: "top",
        duration: 2000
      })
      this.mobileItem.nativeElement.value = ""
    }
  }

  trackById(index: number, mobile: Imobile) {
    return mobile.id
  }

  onRemove(id: string) {
    let getIndex = this.mobiles.findIndex(m => m.id === id)
    this.mobiles.splice(getIndex, 1)
    this.snackbar.open(`The mobile item with id ${id} is remove successfully`, "Close", {
      horizontalPosition: "left",
      verticalPosition: "top",
      duration: 2000
    })
  }

  onEdit(mobile: Imobile) {

    this.EditId = mobile.id
    this.mobileItem.nativeElement.value = mobile.brand;
    this.inisEditMode = true;

  }

  onUpdateMobile() {

    let UPDATE_MOBILEOBJ: Imobile = {
      brand: this.mobileItem.nativeElement.value,
      id: this.EditId
    }

    console.log(UPDATE_MOBILEOBJ);

    this.snackbar.open(`The mobile item with id ${UPDATE_MOBILEOBJ.id} is updated successfully`, "Close", {
      horizontalPosition: "left",
      verticalPosition: "top",
      duration: 2000
    })

    this.mobileItem.nativeElement.value = "";


    let getIndex = this.mobiles.findIndex(m => m.id === UPDATE_MOBILEOBJ.id);
    this.mobiles[getIndex] = UPDATE_MOBILEOBJ
    this.inisEditMode = false
  }

}
