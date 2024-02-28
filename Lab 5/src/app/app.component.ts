import { Component } from '@angular/core';
import { products } from './products';
import { categories } from './categories';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'wish.shop';
  categories;
  show = false;
  id = 0;
  products = products;
  constructor() {
    this.categories = categories;
  }
  categoryClick(id:number){
    if(this.id == id){
      this.show = false;
      this.id = 0;
    }
    else{
      this.show = true;
      this.id = id;
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/