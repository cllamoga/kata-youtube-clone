import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  public term!:string;
  constructor(private router: Router) { }

  ngOnInit(): void { }

  searchVideos(term: string){
    console.log('searchVideos: ', term);
    this.router.navigate([`/search`,term]);
  }
}
