import {
   Component,
   Input,
   Output,
   EventEmitter,
   OnChanges,
   OnInit,
   SimpleChanges
} from '@angular/core';

import { Product } from '../../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  constructor() {
     // Initialization inside the constructor
     this.product = {
        id: '1',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla bla'
     };
     this.productClicked = new EventEmitter();
     this.today = new Date();
     console.log('constructor');
  }
  today: Date;
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  ngOnInit(changes: SimpleChanges) {
     console.log('ngOnInit');
     //TODO: requests
  }

  ngDoCheck(changes: SimpleChanges) {
     console.log('ngDoCheck');
  }

  ngOnDestroy(changes: SimpleChanges) {
     console.log('ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges) {
     console.log('ngOnChanges');
     console.log(changes);
  }
  addCart() {
      console.log('Entro a agregar al carrito');
      this.productClicked.emit(this.product.id);
  }
}
