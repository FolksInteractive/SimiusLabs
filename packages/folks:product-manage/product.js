Product.query = new ReactiveVar();

Product.search = function(){
  var selector = {};
  var query = Product.query.get();
  var regex = new RegExp(query, 'gi');

  if(query && query.length > 2)
    selector = {
      $or: [
        {'name' : regex}
      ] 
    }

  return Products.find(selector , {
    sort: {'name': 1}, 
    transform : Product.transform
  });
}

Product._selected = new ReactiveVar();

Product.select = function(product){
  if(_.isObject(product))
    product = product._id;

  // Storing Product ID
  Product._selected.set(product);
}
Product.toggle = function (n) {
  Product.isSelected(n) ? Product.unSelect() : Product.select(n)
} 
Product.unSelect = function () {
  Product._selected.set(null)
} 
Product.noSelection = function () {
  return !Product._selected.get()
} 
Product.isSelected = function (product) {
  if(_.isObject(product))
    product = product._id;

  // Comparing Product ID
  return Product._selected.get() === product;
} 
Product.selectedId = function () {
  return Product._selected.get()
}
Product.selected = function () {
  return Product._selected.get() ? Product.get(Product._selected.get()) : null
}

// Adding selectivity to Product class
_.extend(Product.class.prototype, {
  select : function () {
    return Product.select(this._id);
  },
  isSelected : function () {
    return Product.isSelected(this._id);
  },
  unSelect : function () {
    return Product.unSelect();
  },
  toggle : function () {
    return Product.toggle(this._id);
  }
});