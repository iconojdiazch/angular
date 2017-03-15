import { Ejemplo0022Page } from './app.po';

describe('ejemplo0022 App', function() {
  let page: Ejemplo0022Page;

  beforeEach(() => {
    page = new Ejemplo0022Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
