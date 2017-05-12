import { EjemploTest0007Page } from './app.po';

describe('ejemplo-test0007 App', () => {
  let page: EjemploTest0007Page;

  beforeEach(() => {
    page = new EjemploTest0007Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
