import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     const options = {
       // tslint:disable-next-line:max-line-length
      strings: ['Training banking juros amigo', 'Peça a portabilidade e venha ser', 'Traning Banking hoje mesmo', 'Inovador, digital e seguro'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true,
    };
     const typed = new Typed('.typing-element', options);
  }
}
