var conftestdata = require('../Test data/test');
var fs = require('fs');
var conftext = conftestdata.wholedata;
var spec_data = conftestdata.spec_data;

module.exports = {
    randomString: function(vara) {
    var chars = "0123456789";
    var randomstring ="";
    for ( j=vara; j>=0; j--){
        for (var i=0 ; i<8 ; i++ ) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        var emailid =  "test" + randomstring + "@yopmail.com";
        randomstring = randomstring.substr(9, 8);
        var arr =  [];
        arr.unshift(emailid);
        console.log(arr);

    }
        return arr;
},


    createTestFiles: function (vara) {
        console.log("HI" + vara);
        for(var i=0;i<vara;i++){
            var outputFilename = '../profile_specs/spec'+i+'.js';
        fs.writeFile(outputFilename, spec_data, function(err) {
            if(err) {
                console.log(err);
            }
            else {
                console.log("JSON saved to " + outputFilename);
            }
        });
        }
    },

    createConfFile: function () {

        var outputFilename = '../Config_files/conf.js';
        fs.writeFile(outputFilename, conftext, function(err) {
            if(err) {
                console.log(err);
            }
            else {
                console.log("JSON saved to " + outputFilename);
            }
        });

    }

};