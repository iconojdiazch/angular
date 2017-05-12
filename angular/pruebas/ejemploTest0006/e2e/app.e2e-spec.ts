import { EjemploTest0006Page } from './app.po';

describe('ejemplo-test0006 App', () => {
  let page: EjemploTest0006Page;

  beforeEach(() => {
    page = new EjemploTest0006Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
