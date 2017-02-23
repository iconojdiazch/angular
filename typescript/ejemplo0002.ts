function saludo2(texto: string): string {
    return texto.toUpperCase();
}

let s2: string = saludo2('abc');
const s3: string = 'Uso de una constante:';
console.log(s3 + s2);