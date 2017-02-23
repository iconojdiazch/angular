import { Ejemplo0008Page } from './app.po';

describe('ejemplo0008 App', function() {
  let page: Ejemplo0008Page;

  beforeEach(() => {
    page = new Ejemplo0008Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
