import { Component, OnInit } from '@angular/core';
import { Wonder } from './wonder';
import{wonders} from './mock-wonders';

@Component({
  selector: 'app-woders-list',
  template: `<h2>7 чудес света</h2>
            <ol>
            <li *ngFor="let item of wonders">
              <h2>{{item.title}}</h2>
              <p>{{item.description}}</p>
              <img [ngStyle]="{'width':'500px', 'height':'auto'}" [attr.src]='item.photo'>
            </li>
            </ol>`,
  styleUrls: ['./woders-list.component.css']
})
export class WodersListComponent implements OnInit {

  wonders = wonders;

  constructor() { }

  ngOnInit(): void {
  }

}
