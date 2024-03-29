import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemNavComponent } from './item-nav/item-nav.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemComponent } from './item/item.component';
import { TabsComponent } from './item-detail/tabs/tabs.component';



@NgModule({
  declarations: [
    ItemNavComponent,
    ItemDetailComponent,
    ItemComponent,
    TabsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItemsModule { }
