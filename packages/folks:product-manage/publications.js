Meteor.publish('products', function(){
  // Return nothing if user is not loggedIn
  if(!this.userId)
    return this.ready();

  if(!Product.can.view(this.userId))
    return this.ready();

  var productsCursor = Products.find({},{fields: {
    duration : 1,
    name: 1,
  }});

  return [
    productsCursor
  ]
});

Meteor.publish('product', function(){
  // Return nothing if user is not loggedIn
  if(!this.userId)
    return this.ready();

  if(!Product.can.view(this.userId))
    return this.ready();

  var productsCursor = Products.find({},{fields: {}});

  return [
    productsCursor
  ]
});