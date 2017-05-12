import { EjemploTest0003Page } from './app.po';

describe('ejemplo-test0003 App', () => {
  let page: EjemploTest0003Page;

  beforeEach(() => {
    page = new EjemploTest0003Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
