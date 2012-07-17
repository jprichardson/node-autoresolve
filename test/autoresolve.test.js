var assert = require('assert'),
    P = require('../lib/autoresolve'),
    fs = require('fs');

var T = function(expr) { assert(expr); };

describe('+ P()', function(){
    it("should return the proper relative path.", function(){
        var customer = require(P('lib/models/customer'));
        T(customer.getName() === 'JP');
    });

    it ("should return the absolute path.", function(done){
        var path = P('lib/models/customer.js');
        var fdr = fs.createReadStream(path);
        var fdw = fs.createWriteStream('/tmp/customer.js');
        
        fdr.on('end', function(){
            var customer = require(P('/tmp/customer'));
            fs.unlinkSync('/tmp/customer.js');
            T(customer.getName() === 'JP');
            done();
        });

        fdr.pipe(fdw);
    })
});