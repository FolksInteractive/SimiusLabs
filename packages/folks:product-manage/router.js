Manage.router = {};

// Subscription Manager
var subsManager = new SubsManager();

Manage.router.listController = RouteController.extend({
  template : 'productManageListView',
  waitOn : function(){
    return [
      subsManager.subscribe('products')
    ]
  },
  onStop : function(){
    Product.query.set(null);
  }
});

Manage.router.detailsController = RouteController.extend({
  template : 'productManageDetailsView',
  waitOn: function(){
    return [
      subsManager.subscribe('product', this.params.ProductId)
    ]
  },
  data : function(){
    Product.select(this.params.productId);
    return Product.selected();
  },
  onStop : function(){
    Product.unSelect();
  }
});