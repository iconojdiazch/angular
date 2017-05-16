import { EjemploTest0009Page } from './app.po';

describe('ejemplo-test0009 App', () => {
  let page: EjemploTest0009Page;

  beforeEach(() => {
    page = new EjemploTest0009Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
