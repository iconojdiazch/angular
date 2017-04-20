interface Persistente {
    guardar(): void;
}

abstract class Persona implements Persistente {
    nombre: string = 'abc';
    guardar() {
        db.push(this);
    }
}
const db: Persona[] = [];

class Empleado extends Persona {
    constructor(n: string = 'abc') {
        super();
        this.nombre = n;
    }
}

const personas: Persona[] = [new Empleado(), new Empleado('def')];
personas.forEach(p => p.guardar());
personas.forEach(p => console.log(p));

const personasSet = new Set<Persona>();
personasSet.add(new Empleado('ghi'));
personasSet.add(new Empleado('ijk'));
personasSet.forEach(p => p.guardar());
personasSet.forEach(p => console.log(p));
