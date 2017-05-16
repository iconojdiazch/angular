import { EjercicioTest0001Page } from './app.po';

describe('ejercicio-test0001 App', () => {
  let page: EjercicioTest0001Page;

  beforeEach(() => {
    page = new EjercicioTest0001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
