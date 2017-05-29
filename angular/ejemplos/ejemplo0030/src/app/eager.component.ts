import { Component } from '@angular/core';

@Component({
    template: '<p>Componente Eager</p>'
})
export class EagerComponent { 
    constructor(){
        console.log('EagerComponent cargado');
    }
}