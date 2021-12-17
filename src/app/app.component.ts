import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Storex';
  items = ['item1', 'item2', 'item3'];

  addItem() {
    this.items.push('New item');
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
