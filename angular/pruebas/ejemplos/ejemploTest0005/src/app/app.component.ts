import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  template: '<p class="quote"><i>{{quote}}</i></p>',
  styles:['.quote{color: blue;}']
})
export class AppComponent implements OnInit {
  intervalId: number;
  quote: string = '...';
  constructor(private quoteService: QuoteService) { }
  ngOnInit(): void {
    this.quoteService.getQuote().then(
      quote => this.quote = quote
    );
  }
}
