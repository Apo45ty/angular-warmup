'use strict';

var app = angular.module('angularWarmupApp', ['ngRoute', 'ui.bootstrap']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'FriendsController'
  })
  .when('/blocked', {
    templateUrl: 'views/blocked.html',
    controller: 'BlockedController'
  });
});
