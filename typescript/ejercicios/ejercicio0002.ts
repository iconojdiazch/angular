type Producto = { id: number, n: string };
const traza: (any) => void = n => console.log(n);
const productos: Producto[] = [
    { id: 1, n: 'abc' },
    { id: 2, n: 'def' },
    { id: 3, n: 'ghi' },
];
const numeros: number[] = [];
for (const producto of productos) {
    numeros.push(producto.id);
}
traza(numeros);

numeros.forEach(traza);