import { Component, Input, OnInit } from '@angular/core';
import { ItemCat } from '../../models/categorie.model';
import { ItemVideo } from '../../models/video.model';
import { DemoYTService } from '../../services/demoYT.service';

@Component({
  selector: 'home-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  @Input()
  public categorie!: ItemCat;

  public videos: ItemVideo[] = [];
  public categoryId!:string;

  constructor(private demoYtService: DemoYTService) { }

  ngOnInit(): void {
    this.demoYtService.categoryId.subscribe(
      catId => this.categoryId = catId
    )
  }

  listVideos(categoryId: string): void {
    this.demoYtService.changeCategoryId(categoryId);
  }
}
