angular.module('app').controller('AgendaCtrl', function($scope, appuntamenti,AgendaSrv){
$scope.appuntamenti = appuntamenti;
$scope.elimina= function(indice){
  AgendaSrv.deleteAppuntamento(indice);
}
$scope.home= function(){
$scope.appuntamento=false;
console.log($scope.appuntamento)
}

})
