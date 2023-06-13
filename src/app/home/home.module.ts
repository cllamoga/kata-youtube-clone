import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { BrowseVideoComponent } from './components/browse-video/browse-video.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import { CategorieListComponent } from './components/categorie-list/categorie-list.component';
import { ListBrowseVideoComponent } from './components/list-browse-video/list-browse-video.component';
import { ListSearchVideoComponent } from './components/list-search-video/list-search-video.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchVideoComponent } from './components/search-video/search-video.component';

import { YtDescriptionPipe } from './pipes/yt-description.pipe';
import { YtDurationPipe } from './pipes/yt-duration.pipe';
import { YtPublishedPipe } from './pipes/yt-published.pipe';
import { YtViewCountPipe } from './pipes/yt-view-count.pipe';

@NgModule({
  declarations: [
    BrowseVideoComponent,
    CategorieComponent,
    CategorieListComponent,
    ListBrowseVideoComponent,
    ListSearchVideoComponent,
    MainPageComponent,
    SearchPageComponent,
    SearchVideoComponent,
    YtDescriptionPipe,
    YtDurationPipe,
    YtPublishedPipe,
    YtViewCountPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    BrowseVideoComponent,
    CategorieComponent,
    CategorieListComponent,
    ListBrowseVideoComponent,
    ListSearchVideoComponent,
    MainPageComponent,
    SearchPageComponent,
    SearchVideoComponent,
    YtDescriptionPipe,
    YtDurationPipe,
    YtPublishedPipe,
    YtViewCountPipe,
  ]
})
export class HomeModule { }
