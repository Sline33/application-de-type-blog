import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {  

    this.loveIts = 0;
  }

  

  onGood() {
    this.loveIts++;
  }


  onBad() {
    this.loveIts--;
  }

  getLoveIts() {
    return this.loveIts;
  }

  ngOnInit() {

  }



}
