import { Service } from './../../services/app.table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  searchText: string;
  constructor(private service: Service) {
    this.service.emitValue = this.searchText;
  }
  
  ngOnInit(): void {}
}
