var assert = require('assert'),
    P = require('../lib/autoresolve');

var T = function(expr) { assert(expr); };

describe('+ P()', function(){
    it("should return the proper path.", function(){
        var customer = require(P('lib/models/customer'));
        T(customer.getName() === 'JP');
    });
});