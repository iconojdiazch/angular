class Pila{
    almacen = [];
    push(n) {
        this.almacen.push(n);
    }
    pop() {
        const x = this.almacen[0];
        this.almacen = 
        this.almacen.slice(1, this.almacen.length);
        return x;
    }
}
const pila = new Pila();

class Pila1<T>{
    almacen:T[] = [];
    push(n:T) {
        this.almacen.push(n);
    }
    pop():T {
        const x = this.almacen[0];
        this.almacen = this.almacen.slice(1, this.almacen.length);
        return x;
    }
}
const pila1 = new Pila1<string>();
pila1.push('abcv');
