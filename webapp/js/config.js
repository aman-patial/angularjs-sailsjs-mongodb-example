/**
 * Configuration file
 */
angular.module('phonebookapp').run(function($rootScope, $location) {

    API_HOST = 'localhost';
    API_PORT = 1337;
    API_URL = 'http://' + API_HOST + ':' + API_PORT;

    $rootScope.phonebookApiUrl = API_URL + '/phonebook';
});