import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SafeResourceUrl, DomSanitizationService} from '@angular/platform-browser';

@Component({
  templateUrl: 'build/pages/video/video.html',
})

export class VideoPage {
  videoId: any = {};
  url: SafeResourceUrl;

  constructor(private nav: NavController, private sanitizer: DomSanitizationService,
    params: NavParams) {
      this.videoId = params.get('videoId');

      this.initPage();
  }

  private initPage() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoId}`);
  }
 }
