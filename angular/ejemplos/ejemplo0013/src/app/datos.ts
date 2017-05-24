export class Data {
    imagenUrl: string;
    nombre: string;
    fecha: string;
    descripcion: string;
    rating: number;
    revisiones: number;
}
export const MOCK_DATOS: Data[] = [
    {
        imagenUrl: "http://loremflickr.com/150/150?random=1",
        nombre: "Mascota 1",
        fecha: "Mayo 31, 2016",
        descripcion: "Cras sit amet nibh libero, in gravida... ",
        rating: 4,
        revisiones: 2
    },
    {
        imagenUrl: "http://loremflickr.com/150/150?random=2",
        nombre: "Mascota 2",
        fecha: "Octubre 31, 2016",
        descripcion: "Cras sit amet nibh libero, in gravida... ",
        rating: 2,
        revisiones: 12
    },
    {
        imagenUrl: "http://loremflickr.com/150/150?random=3",
        nombre: "Mascota 3",
        fecha: "Febrero 30, 2016",
        descripcion: "Cras sit amet nibh libero, in gravida... ",
        rating: 5,
        revisiones: 2
    }];