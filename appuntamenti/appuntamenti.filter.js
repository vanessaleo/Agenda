angular.module('app').filter('filtroAgenda',function(){
  return function (lista,val){
    if (val == 'tutte'){
      return lista;
    }
      return lista.filter(function(el){
      return el.priorita == val;
    })
  
}
})
