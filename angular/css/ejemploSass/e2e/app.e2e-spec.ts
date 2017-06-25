import { EjemploSassPage } from './app.po';

describe('ejemplo-sass App', () => {
  let page: EjemploSassPage;

  beforeEach(() => {
    page = new EjemploSassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
