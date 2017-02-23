import { Ejemplo0001Page } from './app.po';

describe('ejemplo0001 App', function() {
  let page: Ejemplo0001Page;

  beforeEach(() => {
    page = new Ejemplo0001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
