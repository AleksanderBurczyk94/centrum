import { Component } from '@angular/core';
import {AppPaths} from "../../../app-paths";
import {MatPaginatorIntl, PageEvent} from "@angular/material/paginator";
import {BlogService} from "../../../services/blog.service";
import {ActivatedRoute} from "@angular/router";
import {blogCard} from "../../../interfaces/blogCard";

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrl: './blog-cards.component.css'
})
export class BlogCardsComponent {

  appPaths = AppPaths;
  cards: blogCard[];
  constructor(
    private paginatorIntl: MatPaginatorIntl,
    private blogService: BlogService,

  ) {
    this.customizePaginator(); // Dostosowanie paginatora
    this.cards = this.blogService.getCards(); // Pobranie kart z serwisu
  }


  // Metoda do dostosowania etykiet paginatora
  customizePaginator() {
    this.paginatorIntl.itemsPerPageLabel = 'Liczba wpisów na stronę:';
    this.paginatorIntl.nextPageLabel = 'Następna';
    this.paginatorIntl.previousPageLabel = 'Poprzednia';
    this.paginatorIntl.getRangeLabel = (page, pageSize, length) => {
      const startIndex = page * pageSize;
      const endIndex = Math.min(startIndex + pageSize, length);
      return length === 0 ? `0 z ${length}` : `${startIndex + 1} – ${endIndex} z ${length}`;
    };
  }

  // Obsługuje zmianę strony
  onPageChange(event: PageEvent) {
    this.blogService.updatePagination(event);
  }

  // Nawiguje do szczegółów wybranej karty
  navigateToBlog(id: number): void {
    this.blogService.navigateToBlog(this.appPaths, id);
  }

  // Getter do kart stronicowanych
  get paginatedCards() {
    return this.blogService.getPaginatedCards();
  }

  // Getter do liczby wszystkich kart
  get numberOfCards(): number {
    return this.blogService.getCards().length;
  }

  // Getter do rozmiaru strony
  get pageSize(): number {
    return this.blogService.getPageSize;
  }
}
