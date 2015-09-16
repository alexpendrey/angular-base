'use strict';
var angular = require('angular');
/**
 * @ngInject
 */
function basicService() {
    var service = {};
    var param;
    console.log('inside basicService');
    service.doSomething = function() {
        return 'something';
    };
    return service;
}

angular.module('app.services', []).factory('basicService', basicService);