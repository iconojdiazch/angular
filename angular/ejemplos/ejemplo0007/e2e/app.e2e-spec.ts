import { Ejemplo0007Page } from './app.po';

describe('ejemplo0007 App', function() {
  let page: Ejemplo0007Page;

  beforeEach(() => {
    page = new Ejemplo0007Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
