import { Ejemplo0003Page } from './app.po';

describe('ejemplo0003 App', function() {
  let page: Ejemplo0003Page;

  beforeEach(() => {
    page = new Ejemplo0003Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
