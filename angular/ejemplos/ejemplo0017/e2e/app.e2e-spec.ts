import { Ejemplo0017Page } from './app.po';

describe('ejemplo0017 App', function() {
  let page: Ejemplo0017Page;

  beforeEach(() => {
    page = new Ejemplo0017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
