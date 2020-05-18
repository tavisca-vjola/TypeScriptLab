import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchService {
  searchValue: EventEmitter<string>;
  constructor() {
    this.searchValue = new EventEmitter<string>();
  }
  onSearchValue(data: string): void {
    this.searchValue.emit(data);
  }
}
