angular.module('app').controller(

  // controller name
  'MainCtrl', 

  // dependencies injection
  ['$scope', 'ProgressConfig', 'MenuConfig', 

// controller definition
function($scope, progressConfig, menu) {  

  //--- @begin: loading progressbar config
  progressConfig.eventListeners();
  progressConfig.color('#428bca');
  //--- @end: loading progressbar config  

  //--- @begin: menu items 
  menu.addMenuItem('Boorkmars', 'bookmarks');
  menu.addMenuItem('About', 'about');  
  //--- @end: menu items 

  $scope.globalSearchString = '';
  $scope.triggerGlobalSearch = function(event) {
    $scope.globalSearchString = event.currentTarget.value;
    $scope.$broadcast('globalSearch');
    return $scope.globalSearchString;  
  }

}]);