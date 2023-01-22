import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: 'app-aquarium',
  templateUrl: './aquarium.component.html',
  styleUrls: ['./aquarium.component.scss']
})
export class AquariumComponent implements OnInit {
  @ViewChild('aquarium', { static: true }) canvasRef!: ElementRef;
  @Input() color: string = 'blue';
  x = 300;
  y = 300;
  direction: string = this.randomDirection();
  interval: any;
  
  constructor() { }

  ngOnInit() {
    this.moveFish();
  }

  ngAfterViewInit() {
    this.canvasRef.nativeElement.width = this.canvasRef.nativeElement.offsetWidth;
    this.canvasRef.nativeElement.height = this.canvasRef.nativeElement.offsetHeight;
  }

  moveFish() {
    const canvas = this.canvasRef.nativeElement.getContext('2d');
    const {width} = this.canvasRef.nativeElement;
    const {height} = this.canvasRef.nativeElement;
    const timeout = 50;
    canvas.clearRect(0, 0, width, height);
    this.fishMovement(width, height);
    this.drawFish(this.x, this.y);
    this.interval = setTimeout(() => this.moveFish(), timeout);
  }

  fishMovement(width: number, height: number){
    const rightDirection = 40;
    const leftDirection = 50;
    const topBottomDirection = 12;
    const movement = 10;
    switch (this.direction) {
      case 'right':
        this.x += movement;
        if (this.x >= width - rightDirection) {
          this.x = width - rightDirection;
          this.direction = this.randomDirection();
        }
        break;
      case 'left':
        this.x -= movement;
        if (this.x <= leftDirection) {
          this.x = leftDirection;
          this.direction = this.randomDirection();
        }
        break;
      case 'top':
        this.y -= movement;
        if (this.y <= topBottomDirection) {
          this.y = topBottomDirection;
          this.direction = this.randomDirection();
        }
        break;
      case 'bottom':
        this.y += movement;
        if (this.y >= height - topBottomDirection) {
          this.y = height - topBottomDirection;
          this.direction = this.randomDirection();
        }
        break;
    }
  }

  randomDirection() {
    const directions = ['right', 'left', 'top', 'bottom'];
    const randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
  }

  drawFish(x: number, y: number) {
    // This code can be refactored for better readability and maintainability. 
    const strokeColor = "black";
    const strokeWidth = 3;
    const canvas = this.canvasRef.nativeElement.getContext('2d');
    canvas.fillStyle = this.color;
    canvas.strokeStyle = strokeColor;
    canvas.lineWidth = strokeWidth;
    canvas.beginPath();
    canvas.moveTo(x, y);
    canvas.quadraticCurveTo(x + 20, y - 20, x + 40, y);// fish body
    canvas.quadraticCurveTo(x + 20, y + 20, x, y);// fish's body
    canvas.lineTo(x - 40, y); // fish's tail
    canvas.quadraticCurveTo(x - 60, y - 15, x - 40, y);// fish's tail
    canvas.quadraticCurveTo(x - 60, y + 15, x - 40, y);// fish's tail
    canvas.closePath();
    canvas.fill();
    canvas.stroke();
    canvas.beginPath();
    canvas.arc(x + 25, y - 5, 3, 0, Math.PI * 2, false); // fish's eye
    canvas.fill();
    canvas.stroke();
    canvas.beginPath();
    canvas.moveTo(x - 10, y + 10);
    canvas.lineTo(x - 30, y + 10);
  }
}
