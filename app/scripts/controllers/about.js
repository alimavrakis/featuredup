'use strict';

/**
 * @ngdoc function
 * @name featuredupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the featuredupApp
 */
angular.module('featuredupApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
