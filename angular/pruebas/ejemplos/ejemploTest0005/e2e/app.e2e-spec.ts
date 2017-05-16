import { EjemploTest0005Page } from './app.po';

describe('ejemplo-test0005 App', () => {
  let page: EjemploTest0005Page;

  beforeEach(() => {
    page = new EjemploTest0005Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
