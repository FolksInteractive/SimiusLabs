TAPi18n.invoke = function(key){
  return function(){
    return TAPi18n.__(key)
  }
}