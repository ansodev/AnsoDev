import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http, URLSearchParams} from '@angular/http';
import {VideoPage} from '../video/video';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  videos: any = [];

  constructor(private navCtrl: NavController, private http: Http) {
    this.initPage();
  }

  private initPage() {
    let params = new URLSearchParams();

    params.set('key', 'AIzaSyA21_DNYB9V_42-QX_AwXOQDh7P02fT_s0');
    params.set('type', 'video');
    params.set('maxResults', '50');
    params.set('part', 'id, snippet');
    params.set('order', 'date');
    params.set('channelId', 'UCeEY4eHe6kKDzfa9TH3RjVw');

    this.http.get('https://www.googleapis.com/youtube/v3/search', {
      search: params
    })
    .map(response => response.json())
    .subscribe(response => {
      this.videos = response.items;
    })
  }

  onShow(video) {
    this.navCtrl.push(VideoPage, {videoId: video.id.videoId});
  }
}
