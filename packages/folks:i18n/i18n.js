i18n = TAPi18n;

i18n.invoke = function(key){
  return function(){
    return i18n.__(key)
  }
}