Product.Import.addProvider('example', function(){
  var self = this;
  var i = 0;

  var interval = setInterval(function(){
    i++;

    self.push({
      name : "product #"+i
    })

    if(i >= 10)
      clearInterval(interval);

  }, 1000);
})