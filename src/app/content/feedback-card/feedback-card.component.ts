import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss']
})
export class FeedbackCardComponent implements OnInit {
  feedbacks = [{
    src: '../../../assets/images/meeting (1) 1.png',
    description: 'Schedule 1-on-1' 
  },
  {
    src : '../../../assets/images/setup (1) 1.png',
    description: 'Create an initiative' 
  },
  {
    src : '../../../assets/images/feedback (2) 1.png',
    description: 'Continous feedback' 
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
