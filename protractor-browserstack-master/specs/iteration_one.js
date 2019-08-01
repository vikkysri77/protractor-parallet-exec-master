var data = require('../Test data/user_testdata');
var adons = require('../common/datapopulators');

var number_of_users_to_generate = 5;
adons.randomString(number_of_users_to_generate);
adons.createTestFiles(number_of_users_to_generate);
adons.createConfFile();


