import { AfterViewInit, Component, OnInit, Renderer2, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

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
    }
  }

  // ngAfterViewInit(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const video = this.videoElement.nativeElement;
  //
  //     video.muted = true;
  //     video.playsInline = true;
  //     video.autoplay = true;
  //
  //     const playPromise = video.play();
  //     if (playPromise !== undefined) {
  //       playPromise.catch(error => {
  //         console.error('Autoplay failed:', error);
  //         // Opcjonalnie można obsłużyć błąd, np. przez wyświetlenie komunikatu dla użytkownika
  //       });
  //     }
  //   }
  // }
}
