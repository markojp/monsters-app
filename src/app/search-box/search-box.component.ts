import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @Output() onSearchFieldChange = new EventEmitter<string>();

  onSearchBoxChange(text: string) {
    this.onSearchFieldChange.emit(text);
  }
}
