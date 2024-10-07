import {AfterViewInit, Component, OnInit, Renderer2, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit{
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.defer = true;
    this.renderer.appendChild(document.body, script);
  }
  ngAfterViewInit(): void {
    const video = this.videoElement.nativeElement;

    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error('Autoplay failed:', error);
        // Opcjonalnie można obsłużyć błąd, np. przez wyświetlenie komunikatu dla użytkownika
      });
    }
  }
}
