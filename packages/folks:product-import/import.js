Imports = Product.Imports = new Mongo.Collection('product_imports');
Import = Product.Import = {};

Import._providers = {};

Import.getProvider = function(provider){
  check(provider, String);

  return Import._providers[provider];
}

Import.existsProvider = function(provider){
  check(provider, String);

  return !!Import._providers[provider];
}

Import.addProvider = function(provider, fn){
  check(provider, String);
  check(fn, Function);

  Import._providers[provider] = fn;
}

Import.import = function(params, cb){
  return Meteor.call('productImport', params, cb);
}