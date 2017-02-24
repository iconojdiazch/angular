import { Ejemplo0010Page } from './app.po';

describe('ejemplo0010 App', function() {
  let page: Ejemplo0010Page;

  beforeEach(() => {
    page = new Ejemplo0010Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
