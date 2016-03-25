angular.module('phonebookapp.services', []).factory('apiServices', function($http, $location, $rootScope) {
    var api = {};

    api.fetchAllPhonebook = function() {
        return $http({
            method: 'get',
            url: $rootScope.phonebookApiUrl + "/displayall"
        });
    };

    api.createPhonebookContact = function(data) {
       // alert(data);
        //alert($rootScope.phonebookApiUrl + "/create?" + data);
        return $http({
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
            url: $rootScope.phonebookApiUrl + "/create?" + data,
        });
    };

    api.deletePhoneContact = function(data) {
        return $http({
            method: 'delete',
            url: $rootScope.phonebookApiUrl + "/" + data
        });
    };

    return api;
});