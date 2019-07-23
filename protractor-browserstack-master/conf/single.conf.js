exports.config = {
  'specs': [ '../specs/iteration_one.js' ],
  'browserstackUser': process.env.BROWSERSTACK_USERNAME || 'revaturepro1',
  'browserstackKey': process.env.BROWSERSTACK_ACCESS_KEY || 'fp4DwAyGWhbyfx6PPykF',

  'capabilities': {
    'build': 'protractor-browserstack',
    'name': 'single_test',
    'browserName': 'chrome',
    'resolution': '1024x768',
    'browserstack.debug': 'true'
  }
};
