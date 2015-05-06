// ====================================================================================
//
// The app file bootstraps the angular app by  initializing the main module and 
// creating namespaces and moduled for controllers, filters, services, and directives. 
//
// ====================================================================================

'use strict';

var myApp = angular.module('myApp', [
    'appControllers'
]);

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
//   $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);