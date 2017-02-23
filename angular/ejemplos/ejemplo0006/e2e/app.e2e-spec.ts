import { Ejemplo0006Page } from './app.po';

describe('ejemplo0006 App', function() {
  let page: Ejemplo0006Page;

  beforeEach(() => {
    page = new Ejemplo0006Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
