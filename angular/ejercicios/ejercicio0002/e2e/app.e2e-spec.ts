import { Ejercicio0002Page } from './app.po';

describe('ejercicio0002 App', () => {
  let page: Ejercicio0002Page;

  beforeEach(() => {
    page = new Ejercicio0002Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
