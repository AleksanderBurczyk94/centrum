import {
  AfterViewInit,
  Component,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef,
  Inject,
  PLATFORM_ID,
  HostListener
} from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{
  videoPoster: string = '../../../assets/img/usmiechnięte-dzieci.webp';

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  @HostListener('window:resize', [])
  onResize() {
    this.updatePoster();
  }

  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.updatePoster();

    if (isPlatformBrowser(this.platformId)) {
      const script = this.renderer.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.setAttribute('data-use-service-core', '');
      script.defer = true;
      this.renderer.appendChild(document.body, script);
    }
  }

  updatePoster() {
    if (isPlatformBrowser(this.platformId)) {
      this.videoPoster = window.innerWidth < 575
        ? '../../../assets/img/usmiechniete-dzieci-male.webp'
        : '../../../assets/img/usmiechnięte-dzieci.webp';
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const video = this.videoElement.nativeElement;

      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Autoplay failed:', error);
        });
      }
    }
  }
}
