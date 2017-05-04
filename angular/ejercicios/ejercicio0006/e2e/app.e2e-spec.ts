import { Ejercicio0006Page } from './app.po';

describe('ejercicio0006 App', () => {
  let page: Ejercicio0006Page;

  beforeEach(() => {
    page = new Ejercicio0006Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
