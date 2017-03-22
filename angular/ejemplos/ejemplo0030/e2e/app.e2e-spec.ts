import { Ejemplo0030Page } from './app.po';

describe('ejemplo0030 App', () => {
  let page: Ejemplo0030Page;

  beforeEach(() => {
    page = new Ejemplo0030Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
