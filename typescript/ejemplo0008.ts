/*function sumar<T>(x: T, y: T): T {
    return x + y;
}*/

class SemiGroup<T>{
    append: (x: T, y: T) => T;
}

let ms = new SemiGroup<string>();
ms.append = (x, y) => x + y;

let mn = new SemiGroup<number>();
mn.append = (x, y) => x + y;

function fold<T>(col: T[], m: SemiGroup<T>): T {
    return col.reduce(m.append);
}

let test1 = [1, 2, 3];
console.log(fold(test1, mn));

let test2 = ['1', '2', '3'];
console.log(fold(test2, ms));

interface General<T> {
    append: (x: T, y: T) => T;
}

let fnNumber: General<number> = {
    append: (x, y) => x + y
}

console.log(fnNumber.append(1, 1));

let fnString: General<string> = {
    append: (x, y) => x + y
}

console.log(fnString.append('1', '1'));