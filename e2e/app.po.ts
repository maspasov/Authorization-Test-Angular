import { browser, element, by } from 'protractor';

export class V9imxPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('imx-root h1')).getText();
  }
}
