import { Ejemplo0015Page } from './app.po';

describe('ejemplo0015 App', function() {
  let page: Ejemplo0015Page;

  beforeEach(() => {
    page = new Ejemplo0015Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
