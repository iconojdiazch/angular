import { PrincipalService } from "app/principal.service";
import { SecundarioService } from "app/secundario.service";

describe('PrincipalService tests sin Angular', () => {
    let servicio: PrincipalService;
    it('el método obtenerValor debería devolver el valor correcto del servicio secundario', () => {
        servicio = new PrincipalService(new SecundarioService());
        expect(servicio.obtenerValor()).toBe('abc');
    });

    it('el método obtenerValor debería devolver un valor falso al simular el servicio secundario con un objeto', () => {
        const falso = { obtenerValor: () => 'valor falso' };
        servicio = new PrincipalService(falso as SecundarioService);
        expect(servicio.obtenerValor()).toBe('valor falso');
    });

    it('el método obtenerValor debería devolver un valor falso al interceptar el servicio secundario con un espía', () => {
        const servicioSecundario = new SecundarioService();
        const valorSimulado = 'valor simulado';
        const spy = spyOn(servicioSecundario, 'obtenerValor').and.returnValue(valorSimulado);
        servicio = new PrincipalService(servicioSecundario);
        expect(servicio.obtenerValor()).toBe(valorSimulado, 'el servicio devolvió el valor simulado');
        expect(spy.calls.count()).toBe(1, 'el método interceptado fue invocado una vez');
        expect(spy.calls.mostRecent().returnValue).toBe(valorSimulado);
    });
});
