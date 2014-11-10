Template.productManageSearch.helpers({
  query : function(){
    return Product.query.get();
  },
});

Template.productManageSearch.events({
  'keyup .search-input' : _.debounce(function(e){
    Product.query.set(e.target.value);
  }, 300),
});