import { Ejemplo0032Page } from './app.po';

describe('ejemplo0032 App', () => {
  let page: Ejemplo0032Page;

  beforeEach(() => {
    page = new Ejemplo0032Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
