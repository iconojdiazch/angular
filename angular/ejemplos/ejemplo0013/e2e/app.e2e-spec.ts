import { Ejemplo0013Page } from './app.po';

describe('ejemplo0013 App', function() {
  let page: Ejemplo0013Page;

  beforeEach(() => {
    page = new Ejemplo0013Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
