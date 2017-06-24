import { browser, by, element } from 'protractor';

export class PremierLeaguePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pl-root h1')).getText();
  }
}
