const valores: number[] = [1, 2, 3];
function mediaUno(n: number[]): number {
    //ES6 y siguientes automáticamente emplerán 'tail recursion' en esta función
    function reducir(acc: number, array: number[]): number {
        if (array.length === 0)
            return acc;
        else
            return reducir(acc + array[0], array.slice(1, array.length));
    }
    return reducir(0, n) / n.length;
}

const valorUno = mediaUno(valores);
console.log(valorUno);

//Empleando métodos estándar del tipo Array
function mediaDos(n: number[]): number {
    return n.reduce((x, y) => x + y, 0) / n.length;
}

const valorDos = mediaDos(valores);
console.log(valorDos);
