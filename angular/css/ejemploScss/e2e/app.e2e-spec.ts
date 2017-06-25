import { EjemploScssPage } from './app.po';

describe('ejemplo-scss App', () => {
  let page: EjemploScssPage;

  beforeEach(() => {
    page = new EjemploScssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
