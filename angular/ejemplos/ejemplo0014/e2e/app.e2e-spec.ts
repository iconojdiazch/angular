import { Ejemplo0014Page } from './app.po';

describe('ejemplo0014 App', function() {
  let page: Ejemplo0014Page;

  beforeEach(() => {
    page = new Ejemplo0014Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
