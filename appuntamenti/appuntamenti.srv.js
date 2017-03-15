angular.module('app').service('AgendaSrv', function(){

var appuntamenti= [{
  titolo: 'appuntamento',
  data: new Date(),
  descrizione: 'oggi ci sarà da divertirsi',
  luogo: 'Stella Maris',
  priorita: '#ffa500'
}];
var getAppuntamenti=function(){
  return appuntamenti;
}
  return{
getAppuntamenti:getAppuntamenti
  }
});
