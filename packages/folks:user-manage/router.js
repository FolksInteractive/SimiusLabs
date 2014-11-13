Manage.router = {};

// Subscription Manager
var subsManager = new SubsManager();

Manage.router.listController = RouteController.extend({
  template : 'userManageListView',
  waitOn : function(){
    return [
      subsManager.subscribe('users')
    ]
  },
  onStop : function(){
    User.query.set(null);
  }
});

Manage.router.detailsController = RouteController.extend({
  template : 'userManageDetailsView',
  waitOn: function(){
    return [
      subsManager.subscribe('user', this.params.userId)
    ]
  },
  data : function(){
    var selected = this.params.userId;

    if(this.params.userId == 'new') 
      selected = null;
    
    User.select(selected);
    return User.selected();
  },
  onStop : function(){
    User.unSelect();
  }
});