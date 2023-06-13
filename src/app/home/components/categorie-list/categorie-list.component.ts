import { Component, OnInit } from '@angular/core';
import { Categorie, ItemCat } from '../../models/categorie.model';
import { YoutubeTsService } from '../../services/youtube.ts.service';
import { CATEGORIE_ALL } from './categorie-list.constants';

@Component({
  selector: 'home-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.css']
})
export class CategorieListComponent implements OnInit {
  private categorieResult!: Categorie;
  private categoriesTemp: ItemCat[] = [];
  private categorieAll: ItemCat = CATEGORIE_ALL;
  public categories: ItemCat[] = [];

  constructor(private youtubeService: YoutubeTsService) { }

  ngOnInit(): void {
    this.getCategories('en', 'US')
  }

  private getCategories(hl: string, regionCode: string): void {
    this.youtubeService.listCategories(hl, regionCode)
      .subscribe(resp => {
        this.categorieResult = resp;
        if (!resp) this.categories = [];
        this.categoriesTemp = this.categorieResult.items;
        this.categoriesTemp.unshift(this.categorieAll);
        this.categories = this.categoriesTemp.filter(cat => cat.snippet.assignable);
      });
  }
}
