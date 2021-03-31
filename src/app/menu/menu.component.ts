import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: any[] = [    //create menu property
    {display:'Home', route: '/home'},
    {display:'About', route: '/about'},
    {display:'Help', route: '/help'},
    {display:'Contact', route: '/contact'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
