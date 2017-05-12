import { TestService } from "app/test.service";

describe('TestService sin Angular2', () => {
    let testService: TestService;
    beforeEach(() => { testService = new TestService(); });
    it('prueba del método obtenerValor', () => {
        expect(testService.obtenerValor()).toBe('valor real');
    });
    it('prueba del método obtenerValorAsincrono', (done: DoneFn) => {
        testService.obtenerValorAsincrono().then(value => {
            expect(value).toBe('valor asíncrono');
            done();
        });
    });
    it('prueba del método obtenerValorTimeout', (done: DoneFn) => {
        testService.obtenerValorTimeout().then(value => {
            expect(value).toBe('valor con timeout simulado');
            done();
        });
    });
    it('prueba del método obtenerValorObservable', (done: DoneFn) => {
        testService.obtenerValorObservable().subscribe(value => {
            expect(value).toBe('valor usando un observable');
            done();
        });
    });
});
