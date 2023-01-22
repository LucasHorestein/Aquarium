import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Output() colorChanged = new EventEmitter<string>();
  colors = ['Red','Blue','Green'];

  ngOnInit():void { }
  
  changeColor(color:string){
    this.colorChanged.emit(color);
  }
  
  DragAndDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.colors, event.previousIndex, event.currentIndex);
  }
}


