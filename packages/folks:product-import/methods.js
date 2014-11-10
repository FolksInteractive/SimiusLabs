// var Future = Npm.require('fibers/future');

Meteor.methods({
  productImport : function(params){
    check(params, {
      provider : Match.Where(Import.existsProvider),
    });

    if(!Product.can.import(this.userId))
      throw new Meteor.Error(403);
    
    var importId = Imports.insert({
      startedAt : new Date(),
      provider : params.provider,
      importing : true,
    });

    this.unblock();   

    var importStream = new Import.Stream();
    var provider = Import.getProvider(params.provider);
    provider.call(importStream);

    importStream.on('product', Meteor.bindEnvironment(function(productData){
      console.log('on' , productData)
      var params = { details : productData};
      Product.create(params);
    }));

    importStream.on('end', Meteor.bindEnvironment(function(){
      Imports.update(importId, {$set:{
        importing : false,
        endedAt : new Date()
      }});
    }));
  }
});