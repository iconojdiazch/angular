import { Ejercicio0003Page } from './app.po';

describe('ejercicio0003 App', () => {
  let page: Ejercicio0003Page;

  beforeEach(() => {
    page = new Ejercicio0003Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
