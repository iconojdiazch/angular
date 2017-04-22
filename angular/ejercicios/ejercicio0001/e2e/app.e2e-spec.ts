import { Ejercicio0001Page } from './app.po';

describe('ejercicio0001 App', () => {
  let page: Ejercicio0001Page;

  beforeEach(() => {
    page = new Ejercicio0001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
