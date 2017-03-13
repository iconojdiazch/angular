import { Ejemplo0019Page } from './app.po';

describe('ejemplo0019 App', function() {
  let page: Ejemplo0019Page;

  beforeEach(() => {
    page = new Ejemplo0019Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
