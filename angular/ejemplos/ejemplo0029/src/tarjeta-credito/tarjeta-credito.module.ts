import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaCreditoPipe } from './tarjeta-credito.pipe';
import { TarjetaCreditoService } from './tarjeta-credito.service';
import { TarjetaCreditoComponent } from './tarjeta-credito.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        TarjetaCreditoPipe,
        TarjetaCreditoComponent
    ],
    providers: [],
    exports: [TarjetaCreditoComponent]
})
export class TarjetaCreditoModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TarjetaCreditoModule,
            providers: [TarjetaCreditoService]
        };
    }
}
