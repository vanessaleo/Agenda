angular.module('app').service('AgendaSrv', function(){

var appuntamenti= [{
  id: 0,
  titolo: 'appuntamento',
  data: new Date(),
  descrizione: 'oggi ci sarà da divertirsi',
  luogo: 'Stella Maris',
  priorita: 'red'
},
{
  id:1,
  titolo: 'parrucchiere',
  data: new Date(),
  descrizione: 'colore e taglio',
  luogo: 'Blue Style',
  priorita: 'green'
},
{
  id:3,
  titolo: 'shopping',
  data: '20/03/2017 18:30',
  descrizione: 'compere e shopping',
  luogo: 'Ancona city',
  priorita: 'red'
},
{id:4,
  titolo: 'appuntamento',
  data: new Date(),
  descrizione: 'oggi ci sarà da divertirsi',
  luogo: 'Stella Maris',
  priorita: 'red'
},
{id:5,
  titolo: 'parrucchiere',
  data: new Date(),
  descrizione: 'colore e taglio',
  luogo: 'Blue Style',
  priorita: 'green'
},
{id:6,
  titolo: 'shopping',
  data: '20/03/2017 18:30',
  descrizione: 'compere e shopping',
  luogo: 'Ancona city',
  priorita: 'orange'
}];
var getAppuntamenti=function(){
  return appuntamenti;
}
var deleteAppuntamento=function(indice){
  appuntamenti.splice(indice,1)
}
var getAppuntamento=function(id){
  return appuntamenti.find(function(el){
    return el.id == id;
  })
}
  return{
getAppuntamenti:getAppuntamenti,
deleteAppuntamento: deleteAppuntamento,
getAppuntamento:getAppuntamento
  }
});
