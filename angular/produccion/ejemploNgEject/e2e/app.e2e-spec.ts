import { EjemploNgEjectPage } from './app.po';

describe('ejemplo-ng-eject App', () => {
  let page: EjemploNgEjectPage;

  beforeEach(() => {
    page = new EjemploNgEjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
