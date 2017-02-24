import { Ejemplo0009Page } from './app.po';

describe('ejemplo0009 App', function() {
  let page: Ejemplo0009Page;

  beforeEach(() => {
    page = new Ejemplo0009Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
