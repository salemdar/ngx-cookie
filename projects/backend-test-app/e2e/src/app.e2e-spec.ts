import { browser, by, element, logging } from 'protractor';

import { AppPage } from './app.po';

const objectCookieValue = '{\n' +
  '  "myKey": "myValue"\n' +
  '}';

describe('workspace-project backend-test-app', () => {

  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /**
   * TODO angular uses "backend-test-app:serve" as devServerTarget.
   * This causes test app to be served on browser.
   * It actually needs to use "backend-test-app:serve-ssr". But that does not work.
   */
  xit('should set and get cookies', () => {
    page.navigateTo();
    // element(by.id('setCookieButton')).click();
    // element(by.id('getCookieButton')).click();
    expect(element(by.id('cookieValue')).getText()).toBe('myValue');
    expect(element(by.id('objectCookieValue')).getText()).toBe(objectCookieValue);
    expect(element(by.id('hasCookieTrue')).getText()).toBe('true');
    expect(element(by.id('hasCookieFalse')).getText()).toBe('false');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE
    } as logging.Entry));
  });

});
