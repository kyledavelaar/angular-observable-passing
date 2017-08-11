import { Component, OnInit, Input } from '@angular/core';

import { TabsService } from './tabs.service';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  // @Input() tabs;

  constructor(
    private tabsService: TabsService,
  ) { }

  ngOnInit() {
  }

}
