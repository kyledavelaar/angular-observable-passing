import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab/tab.component';

import { ProductsService } from './products.service';
import { MessageService } from './message.service';
import { TabsService } from './tabs/tabs.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
  ],
  providers: [ProductsService, MessageService, TabsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
