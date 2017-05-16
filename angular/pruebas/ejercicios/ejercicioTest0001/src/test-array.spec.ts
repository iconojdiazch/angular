// Ejemplo del uso de un 'generator'.
// En el archivo de configuración 'tsconfig.spec.json' es necesario hacer una pequeña
// modificación: "target": "es2015", en lugar de "target": "es5"
function* secuenciaInfinita() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

describe('Operaciones matemáticas con un array de números', () => {
    let numeros: number[];
    beforeEach(
        () => {
            const iterador = secuenciaInfinita();
            numeros = Array(10).fill(0).map(()=>iterador.next().value);
            console.log('Contenidos del array de números:' + numeros);
        }
    );
    afterEach(() => { numeros = [] });
    it('La suma de los números pares del array debería ser un número par',
        () => {
            const valor = numeros.filter(x => x % 2 === 0).reduce((x, y) => x + y);
            console.log("La suma de los elementos pares del array es " + valor);
            expect(valor % 2 === 0).toBe(true);
        }
    );
    it('La longitud del array debe ser mayor que cero',
        () => {
            expect(numeros.length > 0).toBe(true);
        }
    );
}
);