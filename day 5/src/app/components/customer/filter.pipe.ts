import { Customer } from 'src/app/models/app.model';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(products: Customer[], searchText: string): any[] {
    console.log(products);
    if (!products) return [];
    if (!searchText) return products;
    searchText = searchText.toLowerCase();
    return products.filter((it) => {
      return (
        it.CustomerName.toLowerCase().includes(searchText) ||
        it.City.toLowerCase().includes(searchText)
      );
    });
  }
}
