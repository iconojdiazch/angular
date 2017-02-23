import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private data: Observable<number>;
  private valores: Array<number> = [];
  private errores: boolean;
  private terminado: boolean;

  init() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1000);
      }, 1000);

      setTimeout(() => {
        observer.next(2000);
      }, 2000);

      setTimeout(() => {
        observer.complete();
      }, 3000);
    });

    let subscripcion = this.data.subscribe(
      valor => this.valores.push(valor),
      error => this.errores = true,
      () => this.terminado = true
    );
  }
}
