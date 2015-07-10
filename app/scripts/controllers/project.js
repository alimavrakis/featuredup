'use strict';

/**
 * @ngdoc function
 * @name featuredupApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the featuredupApp
 */
angular.module('featuredupApp')
    .controller('ProjectCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

angular.module('featuredupApp').controller('ListCtrl', function($scope) {
    $scope.features = [
        {'title': 'feat1',
         'snippet': 'snippet for feat1'
        },
        {'title': 'feat2',
         'snippet': 'snippet for feat2'
        },
        {'title': 'feat3',
         'snippet': 'snippet for feat3'
        }

    ];

});
