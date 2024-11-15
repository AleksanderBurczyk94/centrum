import {Component} from '@angular/core';
import {MatPaginatorIntl, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  cards = [
    {
      image: 'assets/img/bawiace-sie-dzieci-centrum-rownowaga.webp',
      alt: 'Bawiące się dzieci',
      title: 'Terapia SI – Kluczowe wyposażenie sali integracji sensorycznej',
      date: '29-11-2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atqueLorem ipsum dolor sit amet, consectetur adipisicing eliconsectetur adipisicing eli.consectetur adipisicing eli....'
    },
    {
      image: 'assets/img/zdjecie-psow.webp',
      alt: 'Zdjęcie psów',
      title: 'Terapia SI – Kluczowe wyposażenie sali integracji sensorycznej',
      date: '29-11-2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque...'
    },
    {
      image: 'assets/img/logo-centrum-terapii-i-wsparcia-rozwoju-rowowaga-w-kaliszu.webp',
      alt: 'Logo centrum terapii',
      title: 'Terapia SI – Kluczowe wyposażenie sali integracji sensorycznej',
      date: '29-11-2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque...'
    },
    {
      image: 'assets/img/bawiace-sie-dzieci-centrum-rownowaga.webp',
      alt: 'Bawiące się dzieci',
      title: 'Terapia SI – Kluczowe wyposażenie sali integracji sensorycznej',
      date: '29-11-2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atqueLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atqueLorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque...'
    },
    {
      image: 'assets/img/zdjecie-psow.webp',
      alt: 'Zdjęcie psów',
      title: 'Terapia SI – Kluczowe wyposażenie sali integracji sensorycznej',
      date: '29-11-2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque...'
    },
    {
      image: 'assets/img/logo-centrum-terapii-i-wsparcia-rozwoju-rowowaga-w-kaliszu.webp',
      alt: 'Logo centrum terapii',
      title: 'Terapia SI – Kluczowe wyposażenie sali integracji sensorycznej',
      date: '29-11-2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad atque...'
    }
  ];

  pageSize = 5;
  currentPage = 0;

  constructor(private paginatorIntl: MatPaginatorIntl) {
    this.customizePaginator();
  }

  customizePaginator() {
    this.paginatorIntl.itemsPerPageLabel = 'Liczba wpisów na stornę:';
    this.paginatorIntl.nextPageLabel = 'Następna';
    this.paginatorIntl.previousPageLabel = 'Poprzednia';
    this.paginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length === 0 || pageSize === 0) {
        return `0 z ${length}`;
      }
      const startIndex = page * pageSize;
      const endIndex = Math.min(startIndex + pageSize, length);
      return `${startIndex + 1} – ${endIndex} z ${length}`;
    };
  }
  get paginatedCards() {
    const startIndex = this.currentPage * this.pageSize;
    return this.cards.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
  }
}
