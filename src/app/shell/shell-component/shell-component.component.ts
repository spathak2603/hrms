import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shell-component',
  templateUrl: './shell-component.component.html',
  styleUrls: ['./shell-component.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '(window:resize)': 'onResize($event.target.innerWidth)'
  }
})
export class ShellComponentComponent implements OnInit {

  constructor() { }

  isNavCollapse: boolean = false;
  
  ngOnInit(): void {
    this.onResize(window.innerWidth);
  }

  onResize(e: number): void {
    if (e < 768) {
      this.isNavCollapse = true
    } else {
      this.isNavCollapse = false
    }
  }

}
