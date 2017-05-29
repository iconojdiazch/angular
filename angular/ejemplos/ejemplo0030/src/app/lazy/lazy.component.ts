import { Component } from '@angular/core';

@Component({
    template: '<p>Componente Lazy</p>'
})
export class LazyComponent { 
    constructor(){
        console.log('LazyComponent cargado');
    }
}