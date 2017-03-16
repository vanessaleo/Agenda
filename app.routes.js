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
})
.state('dettaglio',{
  url:'/dettaglio/:id',
  templateUrl: 'appuntamenti/dettaglio.template.html',
  controller: 'DettaglioCtrl',

})
.state('nuovo',{
  url:'/nuovo/',
  templateUrl: 'appuntamenti/nuovo.template.html',
  controller: 'NuovoCtrl',

});
});
