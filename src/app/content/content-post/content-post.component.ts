import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.scss']
})
export class ContentPostComponent implements OnInit {

  isImg: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
