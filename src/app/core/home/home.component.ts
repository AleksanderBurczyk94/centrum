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
import {Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{

  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  isSectionVisible = false;
  windowWidth: number = 0;
  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      const script = this.renderer.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.setAttribute('data-use-service-core', '');
      script.defer = true;
      this.renderer.appendChild(document.body, script);
      this.windowWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.windowWidth = window.innerWidth;
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY;
    const triggerPosition = 200; // Możesz dostosować tę wartość, aby dostosować moment ładowania sekcji

    if (scrollPosition > triggerPosition) {
      this.isSectionVisible = true;
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
