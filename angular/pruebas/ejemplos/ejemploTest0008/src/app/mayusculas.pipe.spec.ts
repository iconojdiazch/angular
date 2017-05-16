import { MayusculasPipe } from './mayusculas.pipe';

describe('MayusculasPipe', () => {
  it('debería transformar el valor correctamente', () => {
    const pipe = new MayusculasPipe();
    expect(pipe.transform('abc')).toBe('ABC');
  });
});
