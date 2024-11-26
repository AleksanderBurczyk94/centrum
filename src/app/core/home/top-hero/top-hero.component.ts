import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  ViewChild
} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-top-hero',
  templateUrl: './top-hero.component.html',
  styleUrls: ['./top-hero.component.css']
})
export class TopHeroComponent implements OnInit, AfterViewInit {

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  windowWidth = 0;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId && this.windowWidth < 575)) {
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
