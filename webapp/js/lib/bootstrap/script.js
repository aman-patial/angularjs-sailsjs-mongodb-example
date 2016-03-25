var dataPull = angular.module('myApp', []);
dataPull.controller('myController', ['$rootScope', function ($rootScope) {
    console.log('----GOT-user----'+$rootScope.userName);//userName
}]);

dataPull.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	when('/', {
	  controller: myController,
	  templateUrl: 'login_pag.html'
	})
}]);
    function createOptions(id, len) { // don't leak
    var elm = document.getElementById(id), // get the select
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (var i = 1; i <= len; i++) { // loop, i like 42.
        var option = document.createElement('option'); // create the option element
        option.value = i; // set the value property
        option.appendChild(document.createTextNode(i)); // set the textContent in a safe way.
        df.appendChild(option); // append the option to the document fragment
    }
    elm.appendChild(df); // append the document fragment to the DOM. this is the better way rather than setting innerHTML a bunch of times (or even once with a long string)
};
function init()
{
  alert("bn");
  createOptions("strtHoursOpt", 12)
  createOptions("strtMintsOpt", 60)
  createOptions("endHoursOpt", 12)
  createOptions("endMintsOpt", 60)
}