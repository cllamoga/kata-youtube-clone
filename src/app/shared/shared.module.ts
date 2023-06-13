import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SideRowComponent } from './components/side-row/side-row.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SearchBoxComponent,
    SideBarComponent,
    SideRowComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
  ],
  exports: [
    NavBarComponent,
    SearchBoxComponent,
    SideBarComponent,
    SideRowComponent,
  ]
})
export class SharedModule { }
