import { Component, OnInit, Input } from '@angular/core';

import { TabsService } from '../tabs.service';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  tabs;
  lastSelected: number = 0;

  constructor(
    private tabsService: TabsService,
  ) { }

  ngOnInit() {
    this.tabs = this.tabsService.tabs;
  }

  changeTab(id: number){
    const selectedTab = this.tabsService.tabs.filter(tab => {
      return tab['id'] === id;
    })[0];

    this.tabsService.selectedTab.next(id === this.lastSelected ? '' : selectedTab);

    //so tab toggles when select same one
    if (id === this.lastSelected) {
      this.lastSelected = 0;
    } else {
      this.lastSelected = id;
    }
  }

}
