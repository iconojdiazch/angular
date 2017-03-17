import { Ejemplo0025Page } from './app.po';

describe('ejemplo0025 App', function() {
  let page: Ejemplo0025Page;

  beforeEach(() => {
    page = new Ejemplo0025Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
