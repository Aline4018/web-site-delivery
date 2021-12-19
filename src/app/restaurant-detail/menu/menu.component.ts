import { Component, OnInit} from '@angular/core';

import {Menu} from './menu.model';
import {MenuService} from './menu.service';


@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent
implements OnInit {
  menus: Menu[];
  constructor( private menuService: MenuService) { }
  ngOnInit() {
    this.menuService.menu()
      .subscribe(menus => {this.menus = menus; console.log(menus);});
  }

}
