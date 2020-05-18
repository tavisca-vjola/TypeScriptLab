import { CustomerService } from './../../services/app.order.service';
import { SearchService } from '../../services/app.search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  searchText: string;
  constructor(private service: SearchService) {
    this.searchText = '';
  }
  search(): void {
    console.log(this.searchText);
    this.service.onSearchValue(this.searchText);
  }

  ngOnInit(): void {}
}
