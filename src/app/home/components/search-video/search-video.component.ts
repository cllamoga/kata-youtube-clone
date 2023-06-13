import { Component, Input } from '@angular/core';
import { ItemVideo } from 'src/app/home/models/video.model';

@Component({
  selector: 'home-search-video',
  templateUrl: './search-video.component.html',
  styleUrls: ['./search-video.component.css']
})
export class SearchVideoComponent {
  @Input()
  public video! : ItemVideo;

  openLink(id: string){
    window.open(`https://youtube.com/watch?v=${id}`)
  }


}
