import { Ejemplo0002Page } from './app.po';

describe('ejemplo0002 App', function() {
  let page: Ejemplo0002Page;

  beforeEach(() => {
    page = new Ejemplo0002Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
