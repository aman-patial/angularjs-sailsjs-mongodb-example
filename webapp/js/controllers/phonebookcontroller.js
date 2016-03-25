  var app = angular.module('phonebookapp.controllers', []);

  // Phonebook controller  
  app.controller('PhonebookController', function($scope, $rootScope, $location, $route, $http, apiServices) {
      $scope.msg = null;

      $scope.getAllPhoneebook = function() {
          var phonebooks = apiServices.fetchAllPhonebook();
          phonebooks
              .success(function(data) {
                //alert(data);
                  $scope.phonebooks = data;
              })
              .error(function(data) {
                  $scope.msg = data.Message;
              });
      };

///phonebook/create?firstname=aman&lastname=patial&phonenumber=9900273410
     $scope.createPhoneContact = function() {
          var phonebookContact = apiServices.createPhonebookContact('firstname='+ $scope.firstName +'&lastname=' +$scope.lastName + '&phonenumber='+$scope.phonenumber);
          phonebookContact
              .success(function(data) {
                  //alert(data.status);
                  if (data.status == 'OK') {
                    $scope.apiPhoneContactCreateMsg = "Phonebook is created successfully!";
                  }
              })
              .error(function(data) {
                   alert("Error "+data);
                  $scope.apiPhoneContactCreateMsg = data;
              });

      };     

  });