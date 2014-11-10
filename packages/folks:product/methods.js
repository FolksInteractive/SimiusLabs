Meteor.methods({
  productCreate : function(params){
    check(params, Object)

    if(!Product.can.create(this.userId))
      throw new Meteor.Error(401);

    var schema = Product.schemas.base
    var ssContext = schema.newContext();
    
    _.defaults(params, Product.defaults());
    insertParams = _.pick(params, schema.objectKeys());
    ssContext.validate(insertParams);

    if(!ssContext.isValid())
      throw new Meteor.Error(403, 'Invalid params to create product');

    var productId = Products.insert(insertParams);
    
    if(params.details)
      Meteor.call('productUpdateDetails', productId, params.details);

    return productId
  },
  
  productUpdateDetails : function(productId, params) {
    check(productId, String);

    if(!Product.can.update(this.userId))
      throw new Meteor.Error(401);

    var schema = Product.schemas.details
    var ssContext = schema.newContext();
    params = _.pick(params, schema.objectKeys());
    params.valid = ssContext.validate(params);

    return Product.model.update(productId, {$set : params});
  }
});