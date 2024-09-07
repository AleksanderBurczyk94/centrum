import {Component, OnInit, Renderer2} from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-our-center',
  templateUrl: './our-center.component.html',
  styleUrl: './our-center.component.css'
})
export class OurCenterComponent implements OnInit {
  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    AOS.init({
      offset: 120, // Odległość od dołu ekranu, przy której zaczyna się animacja
      duration: 800, // Czas trwania animacji
      easing: 'ease-in-out', // Styl animacji
      delay: 100, // Opóźnienie animacji
      once: true, // Animacja uruchamia się za każdym razem, gdy element staje się widoczny
      mirror: false, // Animacja także przy przewijaniu do góry
      anchorPlacement: 'top-bottom' // Określa, gdzie animacja powinna się uruchamiać względem widocznego obszaru
    });

    this.renderer.listen(window, 'load', () => {
      AOS.refresh();
    });
  }
}
