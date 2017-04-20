type Kg = number;
class Animal {
    static numeroDeInstancias = 0;
    private _peso: Kg = 0;
    constructor(peso: Kg) {
        this._peso = peso;
        Animal.numeroDeInstancias++;
    }
    get peso(): Kg {
        console.log("Get invocado");
        return this._peso;
    }

    set peso(nuevoPeso: Kg) {
        console.log("Set invocado");
        this._peso = nuevoPeso;
    }

    aumentarPeso(p: Kg): Kg {
        this._peso += p;
        return this._peso;
    }
}

const animal = new Animal(100);
console.log(animal.peso);

animal.peso = 150;
console.log(animal.peso);

animal.aumentarPeso(100);
console.log(animal.peso);

class Perro extends Animal {
    dePresa: boolean;
    constructor(p: Kg, dePresa: boolean = false) {
        super(p);
        this.dePresa = dePresa;
    }
}

const perro = new Perro(20);
console.log("Perro: " + perro.peso);
console.log(`Perro: ${perro.dePresa}`);
console.log(`Instancias: ${Animal.numeroDeInstancias}`);