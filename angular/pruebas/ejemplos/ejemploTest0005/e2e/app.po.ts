import { browser, element, by } from 'protractor';

export class EjemploTest0005Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}