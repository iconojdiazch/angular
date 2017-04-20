class Persona {
    nombre: string;
    constructor(_nombre: string) {
        this.nombre = _nombre;
    }
    elNombre(): string {
        return this.nombre;
    }
}

let p = new Persona('abc');
console.log(p.elNombre());

class Empleado extends Persona {
    sueldo: number;
    constructor(_nombre: string, sueldo: number) {
        super(_nombre);
        this.sueldo = sueldo;
    }
    mostrar():string{
        return this.elNombre() + ' ' + this.sueldo;
    }
}

let e = new Empleado('abc',2000.0);
console.log(e.mostrar());