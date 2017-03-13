import { FormControl } from '@angular/forms';

export class ClaveValidator {
    static sinEspacios(formControl: FormControl) {
        if (formControl.value.indexOf(' ') >= 0)
            return { sinEspacios: true };
        return null;
    }
}
