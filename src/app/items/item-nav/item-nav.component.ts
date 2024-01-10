import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-item-nav',
  templateUrl: './item-nav.component.html',
  styleUrls: ['./item-nav.component.scss']
})
export class ItemNavComponent {

  isTopShow = true;
  isBottomShow = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenWidth();
  }

  ngOnInit(): void {
    this.checkScreenWidth();
  }

  private checkScreenWidth(): void {
    this.isTopShow = window.innerWidth >= 720;
    this.isBottomShow = window.innerWidth <= 720;
  }

}
