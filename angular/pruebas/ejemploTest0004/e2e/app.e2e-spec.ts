import { EjemploTest0004Page } from './app.po';

describe('ejemplo-test0004 App', () => {
  let page: EjemploTest0004Page;

  beforeEach(() => {
    page = new EjemploTest0004Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
