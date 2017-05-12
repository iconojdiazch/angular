import { Injectable } from '@angular/core';

@Injectable()
export class QuoteService {

  constructor() { }
  getQuote(): Promise<string> {
    return Promise.resolve('ABC');
  }
}
