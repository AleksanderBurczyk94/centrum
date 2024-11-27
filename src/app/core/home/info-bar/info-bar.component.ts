import { Component, EventEmitter, Output } from '@angular/core';
import { AppPaths } from '../../../app-paths';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrl: './info-bar.component.css',
})
export class InfoBarComponent {
  appPaths = AppPaths;

  @Output()
  isInfoBarVisibleChange = new EventEmitter<boolean>();

  hideInfoBar() {
    this.isInfoBarVisibleChange.emit(false);
  }
}
