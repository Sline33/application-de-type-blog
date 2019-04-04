import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {


  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi aperiam temporibus asperiores inventore dolorem laudantium facere, vitae dolorum. Accusamus alias similique, et numquam temporibus dolorem repellat ab autem modi.',
      loveIts: 2,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi aperiam temporibus asperiores inventore dolorem laudantium facere, vitae dolorum. Accusamus alias similique, et numquam temporibus dolorem repellat ab autem modi.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi aperiam temporibus asperiores inventore dolorem laudantium facere, vitae dolorum. Accusamus alias similique, et numquam temporibus dolorem repellat ab autem modi.',
      loveIts: -2,
      created_at: new Date()
    },
    {
      title: 'Mon quatrième post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi aperiam temporibus asperiores inventore dolorem laudantium facere, vitae dolorum. Accusamus alias similique, et numquam temporibus dolorem repellat ab autem modi.',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Mon cinquième post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat commodi aperiam temporibus asperiores inventore dolorem laudantium facere, vitae dolorum. Accusamus alias similique, et numquam temporibus dolorem repellat ab autem modi.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
