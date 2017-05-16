import { EjemploTest0002Page } from './app.po';

describe('ejemplo-test0002 App', () => {
  let page: EjemploTest0002Page;

  beforeEach(() => {
    page = new EjemploTest0002Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
