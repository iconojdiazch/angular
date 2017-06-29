import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  @Input()
  mensaje: string;

  @Output()
  enviarMensajeEvent = new EventEmitter<string>();

  msg: string;

  enviarMensaje() {
    this.enviarMensajeEvent.emit(this.msg);
  }

  constructor() { }

  ngOnInit() {
  }

}
