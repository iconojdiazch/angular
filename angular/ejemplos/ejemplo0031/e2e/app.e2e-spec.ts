import { Ejemplo0031Page } from './app.po';

describe('ejemplo0031 App', () => {
  let page: Ejemplo0031Page;

  beforeEach(() => {
    page = new Ejemplo0031Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
