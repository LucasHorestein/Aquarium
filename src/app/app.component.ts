import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aquarium';
  selectedColor: string = 'blue';
  
  changeColor(color: string) {
    this.selectedColor = color;
  }
}
