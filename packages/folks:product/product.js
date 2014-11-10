Products = Products = new TAPi18n.Collection('products');

Product = Product = {};

Product.model = Products;

Product.class = function(doc){
  _.extend(this, doc);
}
_.extend(Product.class.prototype, {});

Product.transform = function(doc){
  return new Product.class(doc);
}

Product.defaults = function(){
  return {
    valid : false,
    enabled : true,
    createdAt : new Date()
  }
}

Product.get = function(id){
  return Product.model.findOne(id, {
    transform : Product.transform
  });
}

Product.create = function(params, cb){
  return Meteor.call('productCreate', params, cb);
}

Product.update = function(productId, params, cb){
  return Meteor.call('productUpdateDetails', productId, params, cb);
}