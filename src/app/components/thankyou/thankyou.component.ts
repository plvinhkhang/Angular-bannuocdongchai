import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OrderService} from "../../services/order.service";
import { User } from '../../_models';
import { AccountService } from '../../_services';

@Component({
  selector: 'mg-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {
  message: String;
  orderId: Number;
  user: User;
  products;
  cartTotal;
  constructor(private router: Router,
              private orderService: OrderService,private accountService: AccountService) {
                this.user = this.accountService.userValue;
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      message: String,
      products: ProductResponseModel[],
      orderId: Number,
      total: Number
    };

    this.message = state.message;
    this.orderId = state.orderId;
    this.products = state.products;
    this.cartTotal = state.total;
    console.log(this.products);
  }

  ngOnInit() {

  }

}

interface ProductResponseModel {
  id: Number;
  title: String;
  description: String;
  price: Number;
  quantityOrdered: Number;
  image: String;
}

