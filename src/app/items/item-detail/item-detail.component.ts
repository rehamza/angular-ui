import { Component, ViewChild } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent {
  constructor() {}

  @ViewChild(TabsComponent) myTabsComponent: TabsComponent | undefined;

  // tabs: string[] = ['Információk', 'Helyszín', 'Elérhetőség', 'Árak', 'Csomag tartalma', 'Képek', 'Haladó beállítások'];
  // selectedIndex: number = 0;

  ngAfterViewInit() {
    if (this.myTabsComponent) {
      console.log('Selected Index:', this.myTabsComponent.selectedIndex);
    }
  }
}
