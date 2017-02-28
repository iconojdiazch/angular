import { Ejemplo0012Page } from './app.po';

describe('ejemplo0012 App', function() {
  let page: Ejemplo0012Page;

  beforeEach(() => {
    page = new Ejemplo0012Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
