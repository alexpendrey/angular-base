/*global angular */

'use strict';

describe('Unit: MiddleCtrl', function() {

    var ctrl;
    var scope;

    beforeEach(function() {
        // instantiate the app module
        angular.mock.module('QB.Quiz.HomePage');

        // mock the controller
        angular.mock.inject(function($controller, $rootScope) {
            //var $scope = {};
            scope = $rootScope.$new();
            ctrl = $controller('AlexTestCtrl', {$scope: scope});

        });
    });

    it('should exist', function() {
        expect(ctrl).toBeDefined();
    });

    it('should have a number variable equal to 1234', function() {
        expect(scope.number).toEqual(1234);
    });

    /*it('should have a title variable equal to \'AngularJS, Gulp, and Browserify!\'', function() {
        expect(ctrl.title).toEqual('AngularJS, Gulp, and Browserify!');
    });*/

});