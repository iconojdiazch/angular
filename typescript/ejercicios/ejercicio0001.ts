let uno: boolean = false;
let dos: string = 'abc';
let tres: number = 12;
let cuatro: [string, boolean] = ['abc', true];
let cinco: number | boolean = true;
let seis: any = [1, 2, 3];
let siete = (<number[]>seis);
let ocho = (<Array<number>>seis);
let nueve = seis as Array<number>;
let diez = seis as number[];
const once = 6;
//once = 9;
const doce = {
    id: 1,
    nombre: 'abc'
};
/*doce = {
    id: 2,
    nombre: 'def'
};*/
doce.nombre = 'nuevo';
function mostrar(n: any): void {
    console.log(n);
}
/*function noTerminaUno(b:boolean):never{
    if(b) throw new Error("Fallo");    
}*/
//Para ver los valores de las variables, emplear la función mostrar
mostrar(nueve);
mostrar(cuatro[0]);