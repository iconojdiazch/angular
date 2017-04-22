import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
  <p>
    inline works 1!
  </p>
  `,
  styles:['p {color:red}']
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
