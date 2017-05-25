import { ConcatenarPipe } from './concatenar.pipe';

describe('ConcatenarPipe', () => {
  let pipe: ConcatenarPipe;
  const mensaje = 'abc';
  beforeEach(
    () => {
      pipe = new ConcatenarPipe();
    }
  );
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('debería transformar el texto correctamente sin parámetros', () => {
    expect(pipe.transform(mensaje)).toEqual('ABC');
  });

  it('debería transformar el texto correctamente con parámetros', () => {
    expect(pipe.transform(mensaje,'fin')).toEqual('ABCfin');
  });
});
