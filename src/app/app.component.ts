import { Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('gridDiv', { static: false }) gridDiv!: ElementRef;
  title = 'savarirajuTest';
  public inputNumber:number = 0;
  public grid: number[][] = [];
  constructor(){

  }

 ngOnInit(): void {
 
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
 }


 ngAfterViewInit(): void {
  const divWidth = this.gridDiv.nativeElement.clientWidth;
  console.log(divWidth);
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  
 }
  generateGrid() {
    this.grid = [];

    for (let i = 0; i < this.inputNumber; i++) {
      const row = [];
      for (let j = 0; j < this.inputNumber; j++) {
        const square = (i * this.inputNumber) + j + 1;
        row.push(square * square);
      }
      this.grid.push(row);
    }
  }


  getRectangleStyle() {
    if (!this.grid || this.grid.length === 0) {
      const style = {
        height: `0px`,
        width: `0px`
      };
    }
    const divWidth = this.gridDiv.nativeElement.clientWidth;
    console.log(divWidth);
    const row = this.grid[0];
    const totalCells = row.length;
    const containerWidth = divWidth; // Adjust the container width as needed
    const cellMargin = 10; // Adjust the cell margin as needed

    // Calculate the width for each cell
    const cellWidth = (containerWidth - (totalCells - 1) * cellMargin) / totalCells;
    const style = {
      height: `${cellWidth}px`,
      width: `${cellWidth}px`
    };
    return style;
  }

  
}
