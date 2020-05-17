import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Service {
  emitValue: string;
  constructor() {}
  onEmitValue(data): void {
    this.emitValue = data;
  }
}
