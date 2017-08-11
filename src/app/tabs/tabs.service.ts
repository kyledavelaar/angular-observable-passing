import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable() 
export class TabsService {
  tabs: Object[] = [
    {id: 1, content: 'tab1 content'},
    {id: 2, content: 'tab2 content'},
  ];
  
  //must use a behavior subject or will get errors b/c content will be undefined initially when try to use it in html app component 
  selectedTab = new BehaviorSubject<Object>({id: 0, content: ''});


  getSelected() {
    return this.selectedTab.asObservable();
  }

}