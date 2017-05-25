import { EjemploSimplePage } from './app.po';

describe('ejemplo-simple App', () => {
  let page: EjemploSimplePage;

  beforeEach(() => {
    page = new EjemploSimplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
