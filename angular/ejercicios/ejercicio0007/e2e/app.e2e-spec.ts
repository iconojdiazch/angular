import { Ejercicio0007Page } from './app.po';

describe('ejercicio0007 App', () => {
  let page: Ejercicio0007Page;

  beforeEach(() => {
    page = new Ejercicio0007Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
