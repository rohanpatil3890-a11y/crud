import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Icar, Itodo } from '../models/todo';

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

  @ViewChild('todoItem') todoItem !: ElementRef


  onTodoAdd() {
    if (this.todoItem.nativeElement.value) {

      let todoObj: Itodo = {
        fname: this.todoItem.nativeElement.value,
        id: this.uuid()
      }

      this.todoArr.push(todoObj)

      this.todoItem.nativeElement.value = "";
    }


  }

  trackById(index: number, todo: Itodo) {
    return todo.id
  }

  onRemove(id: string) {

    let getIndex = this.todoArr.findIndex(p => p.id === id)

    this.todoArr.splice(getIndex, 1)
  }





}
