// For app initialization, configuration and routing
'use strict';

angular.module('phonebookapp', 
    [ 'phonebookapp.controllers',
      'phonebookapp.services',
      'ngRoute'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/', { 
            templateUrl: 'partial/viewPhonebook.html'
        }).
        when('/display', { 
            templateUrl: 'partial/viewPhonebook.html'                       
        }).
        otherwise({ redirectTo: 'partial/signin.html' });
    }]);