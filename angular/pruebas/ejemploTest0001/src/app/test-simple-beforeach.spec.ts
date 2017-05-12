describe('Test simple con beforeEach y otros',
    () => {
        beforeAll(
            () => {
                console.log("beforeAll se ejecuta antes de todos los test");
            }
        );
        beforeEach(
            () => {
                console.log("beforeEach se ejecuta antes de cada test");
            }
        );
        it('1 es menor que 2',
            () => expect(1 < 2).toBe(true)
        );
        it('2 es menor que 3',
            () => expect(2 < 3).toBe(true)
        );
        afterEach(
            () => {
                console.log("afterEach se ejecuta después de cada test");
            }
        );
        afterAll(
            () => {
                console.log("afterAll se ejecuta después de todos los test");
            }
        );        
    });