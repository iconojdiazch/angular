import { Ejercicio0005Page } from './app.po';

describe('ejercicio0005 App', () => {
  let page: Ejercicio0005Page;

  beforeEach(() => {
    page = new Ejercicio0005Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
