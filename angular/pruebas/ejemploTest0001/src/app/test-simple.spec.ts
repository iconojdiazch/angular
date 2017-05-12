//Usando funciones literales (lambdas)
describe(
    'test-simple',
    () => {
        it('1 es menor que 2',
            () => expect(1 < 2).toBe(true)
        );
    }
);

//Usando funciones javascript estándar
function b(): boolean {
    return expect(2 < 3).toBe(true);
}
function a() {
    it('2 es menor que 3', b);
}
describe('test simple 2', a);

//Usando funciones javascript estándar locales
function a1() {
    it('3 es menor que 4', b);
    function b(): boolean {
        return expect(3 < 4).toBe(true);
    }
}
describe('test simple 3', a1);