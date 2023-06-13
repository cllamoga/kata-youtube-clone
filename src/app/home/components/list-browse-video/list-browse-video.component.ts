import { Component, OnInit } from '@angular/core';
import { YoutubeTsService } from '../../services/youtube.ts.service';
import { DemoYTService } from '../../services/demoYT.service';
import { ItemVideo, Video } from '../../models/video.model';
import { Channel, ItemChannel } from '../../models/channel.model';
import { switchMap } from 'rxjs';


@Component({
  selector: 'home-list-browse-video',
  templateUrl: './list-browse-video.component.html',
  styleUrls: ['./list-browse-video.component.css']
})
export class ListBrowseVideoComponent implements OnInit {
  private videoResult!: Video;
  public videos: ItemVideo[] = [];
  private channelResult!: Channel;
  private channels: ItemChannel[] = [];

  public categoryId!: string;

  constructor(private youtubeService: YoutubeTsService, private demoYtService: DemoYTService) {
    this.demoYtService.categoryId.subscribe(
      catId => this.categoryId = catId
    )

    if (!this.categoryId) this.categoryId = '0'
  }

  ngOnInit(): void {
    this.demoYtService.categoryId.subscribe(
      catId => {
        this.categoryId = catId;
        this.getVideos('20', 'US', this.categoryId);
      }
    )
  }

  private getVideos(maxResults: string, regionCode: string, categoryId: string): void {
    this.youtubeService.listVideos(maxResults, regionCode, categoryId)
      .pipe(
        switchMap(resp => {
          if (!resp) this.videos = [];
          this.videoResult = resp;
          this.videos = this.videoResult.items;
          const newArrayOfVideos = this.videos.map(video => {
            return this.youtubeService.listChannels(video.snippet.channelId, regionCode)
              .subscribe(respChannel => {
                this.channelResult = respChannel;
                if (!respChannel) this.channels = [];
                this.channels = this.channelResult.items;
                const iconChannel: string = this.channels[0].snippet.thumbnails.default.url;
                video.icon = iconChannel;
              })
          });
          return newArrayOfVideos;
        })
      )
      .subscribe();
  }
}
