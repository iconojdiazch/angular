import { InteractivoComponent } from "app/interactivo/interactivo.component";

describe('Componente interactivo sin Angular', () => {
    let comp: InteractivoComponent;
    beforeEach(() => comp = new InteractivoComponent());

    it('inicialmente el botón debería estar desactivado', () => {
        expect(comp.activado).toBe(false);
    });

    it('al pinchar el botón debería activarse', () => {
        comp.clicked();
        expect(comp.activado).toBe(true);
    });

    it('al pinchar el botón el mensaje debería concordar con "está on"', () => {
        comp.clicked();
        expect(comp.mensaje).toMatch(/está on/i);
    });

    it('si el botón está activo y lo pichamos debería desactivarse, y viceversa', () => {
        comp.clicked();
        expect(comp.activado).toBe(true);
        comp.clicked();
        expect(comp.activado).toBe(false);
    });
});
