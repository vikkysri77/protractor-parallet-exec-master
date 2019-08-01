exports.config = {
    // seleniumAddress: 'http://192.168.2.135:4444/wd/hub',
    seleniumAddress: 'http://localhost:4444/wd/hub/',
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
  //   'specs': [ '../specs/iteration_one.js' ]
  // }],
  //
  // SELENIUM_PROMISE_MANAGER: false



  multiCapabilities: [{
        'browserName': 'chrome',
    }],

    specs: [ '../specs/iteration_one.js' ]


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
  //   'specs': [ '../specs/iteration_one.js' ]
  // },
  //   {
  //     'os' : 'OS X',
  //     'os_version' : 'Mojave',
  //     'browserName' : 'Safari',
  //     'browser_version' : '12.0',
  //     'specs': [ '../specs/iteration_one.js' ]
  //   }],
};

// Code to support common capabilities
// exports.config.multiCapabilities.forEach(function(caps){
//   for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
// });
