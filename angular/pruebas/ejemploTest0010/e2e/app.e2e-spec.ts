import { EjemploTest0010Page } from './app.po';

describe('ejemplo-test0010 App', () => {
  let page: EjemploTest0010Page;

  beforeEach(() => {
    page = new EjemploTest0010Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
