import { Ejemplo0035Page } from './app.po';

describe('ejemplo0035 App', () => {
  let page: Ejemplo0035Page;

  beforeEach(() => {
    page = new Ejemplo0035Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
