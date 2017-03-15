import { Ejemplo0023Page } from './app.po';

describe('ejemplo0023 App', function() {
  let page: Ejemplo0023Page;

  beforeEach(() => {
    page = new Ejemplo0023Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
