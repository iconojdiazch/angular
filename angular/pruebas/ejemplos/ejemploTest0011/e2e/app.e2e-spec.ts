import { EjemploTest0011Page } from './app.po';

describe('ejemplo-test0011 App', () => {
  let page: EjemploTest0011Page;

  beforeEach(() => {
    page = new EjemploTest0011Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
