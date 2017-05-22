import { EjercicioTest0002Page } from './app.po';

describe('ejercicio-test0002 App', () => {
  let page: EjercicioTest0002Page;

  beforeEach(() => {
    page = new EjercicioTest0002Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
