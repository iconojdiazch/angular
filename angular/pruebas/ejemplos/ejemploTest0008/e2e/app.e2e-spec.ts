import { EjemploTest0008Page } from './app.po';

describe('ejemplo-test0008 App', () => {
  let page: EjemploTest0008Page;

  beforeEach(() => {
    page = new EjemploTest0008Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
