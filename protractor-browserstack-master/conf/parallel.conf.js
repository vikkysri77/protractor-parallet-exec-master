exports.config = {

  // /*Lambda test implementation*/
  //
  // seleniumAddress: 'https://sridharg:D4vZoGTaXga0AcDzU0DOhKeSUGH0qvIFFe6Kgo6SVLXQD82jun@hub.lambdatest.com/wd/hub',
  //
  // multiCapabilities: [{
  //   'name': 'Protractor LambdaTest Parallel_Chrome',
  //   'build': 'Protractor Javascript Example',
  //   'browserName': 'Chrome',
  //   'platform': 'WIN10',
  //   'version': '70.0',
  //   'video': true,  //To Enable video recording
  //   'visual': true, //To Enable step by step screenshot
  //   'network': true,    //To capture Network logs
  //   'console': true,   //To capture Console Logs
  //   'specs': [ '../specs/iteration_one.js' ]
  // }, {
  //   'name': 'Protractor LambdaTest Parallel_Safari',
  //   'build': 'Protractor JavaScript Example',
  //   'browserName': 'firefox',
  //   'platform': 'WIN8',
  //   'version': '70.0',
  //   'video': true,  //To Enable video recording
  //   'visual': true, //To Enable step by step screenshot
  //   'network': true,    //To capture Network logs
  //   'console': true,   //To capture Console Logs
  //   'specs': [ '../specs/iteration_two.js' ]
  // }],
  //
  // SELENIUM_PROMISE_MANAGER: false
  'multiCapabilities': [{
      'os': 'Windows',
      'os_version': '10',
      'browserName': 'Chrome',
      'browser_version': '75.0',
      'chromeOptions': {
      'args': ['--user-data-dir=C://Users//Revature//Desktop//protractor-Lambda test-master//profiles//profile 1']
      },
      'specs': [ '../specs/iteration_one.js' ]
    },{
      'os': 'Windows',
      'os_version': '10',
      'browserName': 'Chrome',
      'browser_version': '75.0',
      'chromeOptions': {
          'args': ['--user-data-dir=C://Users//Revature//Desktop//protractor-Lambda test-master//profiles//profile 2']
      },
      'specs': [ '../specs/iteration_two.js' ]
    }],




/*Browser stack implementation*/
  // 'browserstackUser': process.env.BROWSERSTACK_USERNAME || 'revaturepro1',
  // 'browserstackKey': process.env.BROWSERSTACK_ACCESS_KEY || 'fp4DwAyGWhbyfx6PPykF',
  //
  // 'commonCapabilities': {
  //   'build': 'protractor-browserstack',
  //   'name': 'parallel_test',
  //   'browserstack.debug': 'true'
  // },
  //
  // 'multiCapabilities': [{
  //   'os': 'Windows',
  //   'os_version': '10',
  //   'browserName': 'Chrome',
  //   'browser_version': '70.0',
  //
  //   'specs': [ '../specs/iteration_one.js' ]
  // },{
  //   'os': 'Windows',
  //   'os_version': '10',
  //   'browserName': 'Chrome',
  //   'browser_version': '70.0',
  //   'specs': [ '../specs/iteration_two.js' ]
  // },
  //   {
  //     'os' : 'OS X',
  //     'os_version' : 'Mojave',
  //     'browserName' : 'Safari',
  //     'browser_version' : '12.0',
  //     'specs': [ '../specs/iteration_three.js' ]
  //   }],
};

// Code to support common capabilities
// exports.config.multiCapabilities.forEach(function(caps){
//   for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
// });
