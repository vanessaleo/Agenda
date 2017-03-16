angular.module('app').controller('NuovoCtrl',function($scope, AgendaSrv, $state){

  $scope.nuovo=function(){
  AgendaSrv.getNuovo($scope.appuntamento);
  console.log($scope.appuntamento);
  }
$scope.appuntamento={};
$scope.appuntamento.data= new Date();
$scope.appuntamento.priorita= 'red';
});
