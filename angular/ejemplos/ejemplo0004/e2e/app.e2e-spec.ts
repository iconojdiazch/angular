import { Ejemplo0004Page } from './app.po';

describe('ejemplo0004 App', function() {
  let page: Ejemplo0004Page;

  beforeEach(() => {
    page = new Ejemplo0004Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
