import { Ejemplo0005Page } from './app.po';

describe('ejemplo0005 App', function() {
  let page: Ejemplo0005Page;

  beforeEach(() => {
    page = new Ejemplo0005Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
