// =================================================
// Tabs Controller
// =================================================

/* Controllers */

var appControllers = angular.module('appControllers', []);

appControllers.controller('LoginSignUpCtrl', ['$scope', function($scope) {
  $scope.activeTab = 'login';
  $scope.tabTemplates = {
    login: 'partials/login-box.html',
    signup: 'partials/signup.html'
  };

  $scope.switchTabTo = function (tabId) {
    $scope.activeTab = tabId;
  };
}]);