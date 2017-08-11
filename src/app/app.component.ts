import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { ProductModel } from './product.model';
import { ProductsService } from './products.service';
import { MessageService } from './message.service';
import { TabsService } from './tabs/tabs.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  products
  message: any;
  subscription: Subscription;
  selectedTab: object;
  tabs: Object[];

  constructor(
    private productsService: ProductsService,
    private messageService: MessageService,
    private tabsService: TabsService,
  ) {}

  ngOnInit() {

    this.tabsService.getSelected()
      .subscribe(obj => this.selectedTab = obj)
    
    this.tabs = this.tabsService.tabs;

    //make the observable equal to subscription so you can unsubscribe to it when leave component
    this.subscription = this.messageService.getMessage()
      .subscribe(message => {
        this.message = message;
      })

    this.productsService.getProducts()
      .subscribe(
        (productsReceived) => {
          this.products = productsReceived
        }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
