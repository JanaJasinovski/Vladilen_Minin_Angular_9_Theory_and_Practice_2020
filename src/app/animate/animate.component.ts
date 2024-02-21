import { Component, OnInit } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {bounce, bounceOutUp} from "ng-animate";

@Component({
  selector: 'app-animate',
  template: `
    <button (click)="visible = !visible">Toggle</button>
    <hr>
    <div [@bounce] class="rect" *ngIf="visible"></div>
  `,
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounce)),
      transition('* => void', useAnimation(bounceOutUp, {
        params: {
          timing: 3,
          delay: 0.3
        }
      })),
    ])
  ]
})
export class AnimateComponent implements OnInit {
  visible = true

  constructor() { }

  ngOnInit() {
  }

}
