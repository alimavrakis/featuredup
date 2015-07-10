'use strict';

/**
 * @ngdoc function
 * @name featuredupApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the featuredupApp
 */
angular.module('featuredupApp', [])
    .controller('ProjectsCtrl', ['$scope', function ProjectsCtrl($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

    }]);
