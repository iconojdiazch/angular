import { Ejemplo0027Page } from './app.po';

describe('ejemplo0027 App', () => {
  let page: Ejemplo0027Page;

  beforeEach(() => {
    page = new Ejemplo0027Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
