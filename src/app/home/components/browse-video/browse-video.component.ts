import { Component, Input } from '@angular/core';
import { ItemVideo } from 'src/app/home/models/video.model';

@Component({
  selector: 'home-browse-video',
  templateUrl: './browse-video.component.html',
  styleUrls: ['./browse-video.component.css']
})
export class BrowseVideoComponent {
  @Input()
  public video! : ItemVideo;

  openLink(id: string){
    window.open(`https://youtube.com/watch?v=${id}`)
  }
}
