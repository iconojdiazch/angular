import { Ejercicio0008Page } from './app.po';

describe('ejercicio0008 App', () => {
  let page: Ejercicio0008Page;

  beforeEach(() => {
    page = new Ejercicio0008Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
