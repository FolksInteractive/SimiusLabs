Product.router = Product.router || {};
Product.router.manage = {};

// Subscription Manager
var subsManager = Product.router.manage.subsManager = new SubsManager();

// List Controller
var listConfig = Product.router.manage.listConfig = {
  template : 'productManageListView',
  waitOn : function(){
    return [
      subsManager.subscribe('products')
    ]
  }
};

// Details Controller
var detailsConfig = Product.router.manage.detailsConfig = {
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
};

// Configuring Router on startup to let time to alter RouterControlers
Meteor.startup(function(){
  Router.map(function(){
    var listController = Product.router.defaultController.extend(listConfig);
    this.route('productManageList', {
      path : '/products',
      controller : listController
    });

    var detailsController = Product.router.defaultController.extend(detailsConfig);
    this.route('productManageDetails', {
      path : '/product/:productId',
      controller : detailsController
    });

  });
})