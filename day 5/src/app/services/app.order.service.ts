import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CustomerService {
  emitValue: EventEmitter<Array<number>>;
  emitId: EventEmitter<number>;
  constructor() {
    this.emitValue = new EventEmitter<Array<number>>();
    this.emitId = new EventEmitter<number>();
  }
  onEmitValue(data: Array<number>): void {
    this.emitValue.emit(data);
  }
}
