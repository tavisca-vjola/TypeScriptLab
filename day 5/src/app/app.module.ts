import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './components/customer/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './services/app.order.service';
import { SearchService } from './services/app.search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    OrderComponent,
    CustomerComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CustomerService, SearchService],
  bootstrap: [CustomerComponent, OrderComponent, SearchComponent],
})
export class AppModule {}
