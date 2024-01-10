import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() tabs: string[] = [];
  selectedIndex: number = 0;
  barLeft: string = '0%';

  selectTab(index: number): void {
    this.selectedIndex = index;
    this.barLeft = `${index * 100}%`;
  }
}
