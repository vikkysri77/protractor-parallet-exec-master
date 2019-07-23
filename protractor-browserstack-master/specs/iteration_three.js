var data = require('../Test data/user_testdata');


describe('Front end login', function() {

  it('can find search results', function() {
    browser.driver.get('https://qa.revature.com').then(function() {
      browser.waitForAngular();
      browser.driver.findElement(by.id('loginEmail')).sendKeys(data.usersEmail[2]);
      browser.driver.findElement(by.id('loginPassword')).sendKeys('Pass123$\n');
      browser.sleep(5000);
      expect(browser.driver.getTitle()).toEqual('RevaturePro - Dashboard');

  });
});
});