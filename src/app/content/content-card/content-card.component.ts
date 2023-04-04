import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  constructor() { }

  initiatives = [{
    count : 2,
    objective: 'Initiatives assigned to me' 
  },
  {
    count : 4,
    objective: 'Initiatives assigned by me' 
  },
  {
    count : 3,
    objective: 'Initiatives assigned to team' 
  },
];

  ngOnInit(): void {
  }

}
