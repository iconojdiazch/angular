import { EjemploTest0001Page } from './app.po';

describe('ejemplo-test0001 App', () => {
  let page: EjemploTest0001Page;

  beforeEach(() => {
    page = new EjemploTest0001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
