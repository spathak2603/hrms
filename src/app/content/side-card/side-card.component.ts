import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.scss']
})
export class SideCardComponent implements OnInit {

  constructor() { }

  birthdays = [{
    src : "../../../assets/images/Photo.png",
    reason : "birthday",
    message : "Kamal Hassan's birthday is today"
  },
  {
    src : "../../../assets/images/Photo (1).png",
    reason : "work anniversary",
    message : "Nishant Gathwal has completed one year at work"
  },
  {
    src : "../../../assets/images/Photo (2).png",
    reason : "birthday",
    message : "Shubham Pathak's birthday is today"
  }];

  coreValues = [{message : "Simplicity & Innovation There’s always a better, sharper, faster, simpler way to do things"},
  {message : "Customer Centricity We Think Like Our Customers & Act Like Their Partners"},
  {message : "Ownership for us is not just building the product – it is ensuring we are solving a problem"}];

  referral = [{opening: 'Software Engineer', type: 'IJP'},
  {opening: 'Android Developer', type: 'Referral'},
  {opening: 'Business Analyst', type: 'Referral'}]

  ngOnInit(): void {
  }

}
