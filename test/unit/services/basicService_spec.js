/*global angular */

'use strict';

describe('Unit: basicService', function() {

    var basicService;

    beforeEach(module('app.services'));

    beforeEach(inject(function(_basicService_) {
        basicService = _basicService_;
    }));
    it('should work', function() {
       expect(basicService.doSomething()).toEqual('something');
    });

});