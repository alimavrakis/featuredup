'use strict';

/**
 * @ngdoc function
 * @name featuredupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the featuredupApp
 */
angular.module('featuredupApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
