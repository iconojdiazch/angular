import { InMemoryDbService } from 'angular-in-memory-web-api';
export class ServicioEnMemoria implements InMemoryDbService {
    createDb() {
        let productos = [
            { id: 11, nombre: 'Producto uno' },
            { id: 12, nombre: 'Producto dos' },
            { id: 13, nombre: 'Producto tres' }
        ];
        return { productos };
    }
}
