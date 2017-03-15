angular.module('app').config(function(
    $stateProvider,$urlRouterProvider){
$urlRouterProvider.otherwise('/');
$urlRouterProvider.when('','/');
$stateProvider
.state('/', {
  url:'/',
  controller: 'AgendaCtrl',
  templateUrl: 'appuntamenti/appuntamenti.template.html',
  resolve: {
    appuntamenti: function(AgendaSrv){
      return AgendaSrv.getAppuntamenti();
    }
  }
});
});
