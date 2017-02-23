abstract class Vehiculo {
    static numeroVehiculos: number = 0;
    constructor(public matricula: string) { }
}

class Coche extends Vehiculo {
    constructor(matricula: string, public airbag: boolean = false) {
        super(matricula);
    }
}

class Moto extends Vehiculo {
    constructor(matricula: string, public sidecar: boolean = false) {
        super(matricula);
    }
}

let coche = new Coche('def');
console.log(coche.matricula + ' ' + coche.airbag);

let moto = new Moto('ghi', true);
console.log(moto.matricula + ' ' + moto.sidecar);

class Concesionario<T extends Vehiculo>{
    private vehiculos: T[] = [];
    nuevo(v: T): T {
        this.vehiculos.push(v);
        Vehiculo.numeroVehiculos++;
        return v;
    }
    lista(): void {
        console.log(Vehiculo.numeroVehiculos);
        this.vehiculos.forEach(v => console.log(v));
    }
}

let concesionario = new Concesionario();
concesionario.nuevo(coche);
concesionario.nuevo(moto);
concesionario.lista();