import { Component, OnInit, Input } from '@angular/core';

import { TabsService } from '../tabs.service';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  tabs;

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

    console.log('TAB COMP', selectedTab)

    this.tabsService.selectedTab.next(selectedTab)
  }

}
