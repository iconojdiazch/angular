interface Etiquetable {
    etiqueta: string;
}

function mostrar1(input: Etiquetable) {
    console.log(input.etiqueta);
}

let objeto1 = {size: 10, etiqueta: "Objeto con Size 10"};
mostrar1(objeto1);