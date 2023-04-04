import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit {
  arr = [1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

}
