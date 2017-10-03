interface PersistenteGenerica<T> {
    guardar(): T;
}

abstract class PersonaGenerica implements PersistenteGenerica<PersonaGenerica> {
    nombre: string = 'abc';
    guardar() {
        dbGenerica.push(this);
        return this;
    }
}
const dbGenerica: PersonaGenerica[] = [];

class EmpleadoGenerico extends PersonaGenerica{
    constructor(n: string = 'abc') {
        super();
        this.nombre = n;
    }
}

const personasGenericas: PersonaGenerica[] = [new EmpleadoGenerico(), new EmpleadoGenerico('def')];
personasGenericas.forEach(p => p.guardar());
personasGenericas.forEach(p => console.log(p));

