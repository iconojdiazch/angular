import { Ejemplo0028Page } from './app.po';

describe('ejemplo0028 App', () => {
  let page: Ejemplo0028Page;

  beforeEach(() => {
    page = new Ejemplo0028Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
