import { Ejemplo0033Page } from './app.po';

describe('ejemplo0033 App', () => {
  let page: Ejemplo0033Page;

  beforeEach(() => {
    page = new Ejemplo0033Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
