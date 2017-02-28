import { Ejemplo0011Page } from './app.po';

describe('ejemplo0011 App', function() {
  let page: Ejemplo0011Page;

  beforeEach(() => {
    page = new Ejemplo0011Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
