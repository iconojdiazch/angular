import { Ejemplo0034Page } from './app.po';

describe('ejemplo0034 App', () => {
  let page: Ejemplo0034Page;

  beforeEach(() => {
    page = new Ejemplo0034Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
