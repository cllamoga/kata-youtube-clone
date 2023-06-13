import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of, switchMap, tap, forkJoin } from 'rxjs';
import { Video } from '../models/video.model';
import { Channel } from '../models/channel.model';
import { Categorie } from '../models/categorie.model';
import { VideoSearch } from '../models/videoSearch.model';

@Injectable({ providedIn: 'root' })
export class YoutubeTsService {
  private API_KEY = 'API_KEY';
  private apiUrl = 'https://youtube.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) { }

  private getCategories(url: string): Observable<Categorie> {
    return this.http.get<Categorie>(url)
      .pipe(
        catchError(() => of())
      );
  }

  private getVideos(url: string): Observable<Video> {
    return this.http.get<Video>(url)
      .pipe(
        catchError(() => of())
      );
  }

  private getVideosSearch(url: string): Observable<VideoSearch> {
    return this.http.get<VideoSearch>(url)
      .pipe(
        catchError(() => of())
      );
  }

  private getChannel(url: string): Observable<Channel> {
    return this.http.get<Channel>(url)
      .pipe(
        catchError(() => of())
      );
  }

  listCategories(hl: string, regionCode: string): Observable<Categorie> {
    const url = `${this.apiUrl}/videoCategories?part=snippet&hl=${hl}&regionCode=${regionCode}&key=${this.API_KEY}`;

    return this.getCategories(url);

  }

  listVideos(maxResults: string, regionCode: string, categoryId: string): Observable<Video> {
    let url: string = '';

    if (categoryId === '0') {
      url = `${this.apiUrl}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${maxResults}&regionCode=${regionCode}&key=${this.API_KEY}`;
    } else {
      url = `${this.apiUrl}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${maxResults}&regionCode=${regionCode}&videoCategoryId=${categoryId}&key=${this.API_KEY}`;
    }

    return this.getVideos(url);
  }

  listChannels(id: string, regionCode: string): Observable<Channel> {
    const url = `${this.apiUrl}/channels?part=snippet&id=${id}&regionCode=${regionCode}&key=${this.API_KEY}`;

    return this.getChannel(url);
  }

  searchVideos(maxResults: string, regionCode: string, q: string){
    const url = `${this.apiUrl}/search?part=snippet&maxResults=${maxResults}&regionCode=${regionCode}&q=${q}&key=${this.API_KEY}`

    return this.getVideosSearch(url);
  }

  obtainVideoById(videoId: string){
    if(!videoId) videoId = '';
    const url = `${this.apiUrl}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${this.API_KEY}`

    // console.log('obtainVideoById: url', url);
    return this.getVideos(url);
  }
}
