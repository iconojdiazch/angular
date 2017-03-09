import { Ejemplo0016Page } from './app.po';

describe('ejemplo0016 App', function() {
  let page: Ejemplo0016Page;

  beforeEach(() => {
    page = new Ejemplo0016Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
