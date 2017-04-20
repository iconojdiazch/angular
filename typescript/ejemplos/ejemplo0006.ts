interface Imprimible {
    imprimir(): string;
}

class TestInterface implements Imprimible {
    texto: string;
    imprimir(): string {
        return this.texto.toUpperCase();
    }
    constructor(t: string) {
        this.texto = t;
    }
}

let t = new TestInterface('abc');
console.log(t.imprimir());

class Punto {
    x: number;
    y: number;
}

interface Punto3d extends Punto {
    z: number;
}

let punto3d: Punto3d = {x: 1, y: 2, z: 3};
console.log(punto3d);