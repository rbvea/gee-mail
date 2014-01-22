angular.module('starter.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('messageIndexCtrl', function($scope, MessageService, $log) {
  // "Pets" is a service returning mock data (services.js)
  var messages = MessageService.all();
  $log.warn(messages);
  $scope.messages = messages;
})


// A simple controller that shows a tapped item's data
.controller('messageDetailCtrl', function($scope, $stateParams, MessageService) {
  // "Pets" is a service returning mock data (services.js)
  $scope.message = MessageService.get($stateParams.petId);
});
