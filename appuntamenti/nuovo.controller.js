angular.module('app').controller('NuovoCtrl',function($scope, AgendaSrv, $state){
  $scope.nuovo=AgendaSrv.getNuovo();

}
