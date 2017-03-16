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
  data: new Date(2018,11,25,10,30),
  descrizione: 'compere e shopping',
  luogo: 'Ancona city',
  priorita: 'red'
},
{id:4,
  titolo: 'appuntamento',
  data: new Date(2017,03,29,18,30),
  descrizione: 'oggi ci sarà da divertirsi',
  luogo: 'Stella Maris',
  priorita: 'red'
},
{id:5,
  titolo: 'parrucchiere',
  data: new Date(2017,03,29,18,30),
  descrizione: 'colore e taglio',
  luogo: 'Blue Style',
  priorita: 'green'
},
{id:6,
  titolo: 'shopping',
  data: new Date(2017,05,19,16,30),
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
var getNuovo=function(nuovo){
var nuovo= angular.copy(nuovo);
var arrayId=  [];
appuntamenti.forEach(function(el){
  arrayId.push(el.id);
})
var id= Math.max(...arrayId);
nuovo.id = ++id;
 appuntamenti.push(nuovo);

};


var aggiornaAppuntamento=function(app){
var updateOggetto= angular.copy(app);
var indice= appuntamenti.findIndex(function(el){
  return el.id == app.id;
})
appuntamenti.splice(indice,1,updateOggetto);
}

  return{
getAppuntamenti:getAppuntamenti,
deleteAppuntamento: deleteAppuntamento,
getAppuntamento:getAppuntamento,
getNuovo:getNuovo,
aggiornaAppuntamento:aggiornaAppuntamento
  }
});
