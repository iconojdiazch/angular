import { InteractivoComponent } from './interactivo.component';
import { TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";
import { async } from "@angular/core/testing";

describe("Componente interactivo", () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                InteractivoComponent
            ],
        }).compileComponents();
    }));
    it('debería ser posible hacer click en el botón', () => {
        const fixture = TestBed.createComponent(InteractivoComponent);
        const btn = fixture.debugElement.query(By.css('button'));
        const span = fixture.debugElement.query(By.css('span')).nativeElement;

        fixture.detectChanges();
        expect(span.textContent).toMatch(/está off/i, 'antes del click');

        click(btn);
        fixture.detectChanges();
        expect(span.textContent).toMatch(/está on/i, 'después del click');
    });

});

const ButtonClickEvents = {
    left: { button: 0 },
    right: { button: 2 }
};
function click(el: DebugElement | HTMLElement, eventObj: any = ButtonClickEvents.left): void {
    if (el instanceof HTMLElement) {
        el.click();
    } else {
        el.triggerEventHandler('click', eventObj);
    }
}