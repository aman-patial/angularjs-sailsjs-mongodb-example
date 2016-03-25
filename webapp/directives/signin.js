var app = angular.module('phonebookapp.signInDirective', []);

app.directive('phonebookappSignIn', function () {
    return {
        restrict: 'EA', 
		templateUrl:'partial/custom-directives/signindirective.html?',
		link: function($scope, iElm, iAttrs, controller) {	
		      }
	};
});
