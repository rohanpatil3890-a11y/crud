import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../models/todo';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoArr: Array<Itodo> = [

    {
      fname: "HTML",
      id: "123"
    },
    {
      fname: "CSS",
      id: "124"
    },
    {
      fname: "JavaScript",
      id: "125"
    }
  ]
  fname: any;


  constructor(private snackbar: MatSnackBar) {

  }

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

  @ViewChild('todoItem') todoItem!: ElementRef


  isinEditMode: boolean = false;

  Edit_id!: string;

  onTodoAdd() {
    if (this.todoItem.nativeElement.value) {

      let todoObj: Itodo = {
        fname: this.todoItem.nativeElement.value,
        id: this.uuid()
      }

      this.todoArr.push(todoObj)

      this.todoItem.nativeElement.value = "";

      this.snackbar.open(`Todo item with id ${todoObj.id} is created successfully`,"Close",{
        horizontalPosition : "left",
        verticalPosition : "top",
        duration : 2000
      })
    }


  }

  trackById(index: number, todo: Itodo) {
    return todo.id
  }

  onRemove(id: string) {

    let getIndex = this.todoArr.findIndex(p => p.id === id)

    this.todoArr.splice(getIndex, 1);

    this.snackbar.open(`The todo with id ${id} deleted successfully`, "Close", {
      horizontalPosition : "left",
      verticalPosition : "top",
      duration : 2000
    })

    // this.todoArr = this.todoArr.filter(todo => todo.id !== id);

  }


  onEdit(todo: Itodo) {

    console.log(todo)
    this.Edit_id = todo.id;
    this.todoItem.nativeElement.value = todo.fname;
    this.isinEditMode = true;

  }


  onUpdate() {

    let UPDATE_TODO: Itodo = {
      fname: this.todoItem.nativeElement.value,
      id: this.Edit_id
    }
    this.todoItem.nativeElement.value = "";
    this.snackbar.open(`The todo item with id ${UPDATE_TODO.id} is updated successfully`,"Close",{
      horizontalPosition : "left",
      verticalPosition : "top",
      duration : 2000
    })

    let getIndex = this.todoArr.findIndex(t => t.id === UPDATE_TODO.id)

    this.todoArr[getIndex] = UPDATE_TODO;
    this.isinEditMode = false;


  }


}
