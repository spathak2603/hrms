import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  currentTime: any;
  date: any
  time: any;
  constructor(private datePipe : DatePipe) { 
  }

  ngOnInit(): void {
   this.getTime();
  }

  getTime(): void{
    this.currentTime = new Date();
    this.date = this.datePipe.transform(this.currentTime, 'fullDate')
    this.time = this.datePipe.transform(this.currentTime.getTime(), 'shortTime');
    console.log("HOUR HERE", this.time, this.date);
  }

}
