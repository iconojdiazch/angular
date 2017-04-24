import { Ejercicio0004Page } from './app.po';

describe('ejercicio0004 App', () => {
  let page: Ejercicio0004Page;

  beforeEach(() => {
    page = new Ejercicio0004Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
