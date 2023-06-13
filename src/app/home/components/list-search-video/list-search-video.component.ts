import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { YoutubeTsService } from '../../services/youtube.ts.service';
import { ItemVideo, Video } from '../../models/video.model';
import { Channel, ItemChannel } from '../../models/channel.model';
import { ItemVideoSearch, VideoSearch } from '../../models/videoSearch.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'home-list-search-video',
  templateUrl: './list-search-video.component.html',
  styleUrls: ['./list-search-video.component.css']
})
export class ListSearchVideoComponent implements OnInit {
  private searchResult!: VideoSearch;
  public videosSearch: ItemVideoSearch[] = [];
  public videosSearchFiltered: ItemVideoSearch[] = [];

  private videoResult!: Video;
  private videos: ItemVideo[] = [];

  private channelResult!: Channel;
  private channels: ItemChannel[] = [];

  public q!: string;
  public categoryId!: string;

  public listVideosFound: ItemVideo[] = [];

  public term!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private youtubeService: YoutubeTsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        this.listVideosFound = []
        if (!params) {
          this.router.navigateByUrl('');
        }

        this.term = params['q'];
        this.getVideos('15', 'US', this.term);
      }
      );
  }

  private getVideos(maxResults: string, regionCode: string, q: string): any {
    this.youtubeService.searchVideos(maxResults, regionCode, q)
      .pipe(
        switchMap(resp => {
          if (!resp) this.videosSearch = [];
          this.searchResult = resp;
          this.videosSearch = this.searchResult.items;
          this.videosSearchFiltered = this.videosSearch.filter(v => v.id.videoId);

          return this.videosSearchFiltered.map(video => {
            this.youtubeService.obtainVideoById(video.id.videoId)
              .pipe(
                switchMap((respVideo: any) => {
                  this.videoResult = respVideo;
                  if (!respVideo) this.videos = [];
                  this.videos = this.videoResult.items;
                  return this.videos.map((video: any) => {
                    this.youtubeService.listChannels(video.snippet.channelId, regionCode)
                      .subscribe(respChannel => {
                        this.channelResult = respChannel;
                        if (!respChannel) this.channels = [];
                        this.channels = this.channelResult.items;
                        const iconChannel: string = this.channels[0].snippet.thumbnails.default.url;
                        video.icon = iconChannel;
                        this.listVideosFound.push(video);

                      })
                  });
                })
              )
              .subscribe()
          });
        })
      )
      .subscribe();
  }
}
