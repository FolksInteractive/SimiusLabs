Product.can = {
  view : function(userId){
    return User.isAdmin(userId);
  },
  create : function(userId){
    return User.isAdmin(userId);
  },
  update : function(userId){
    return User.isAdmin(userId);
  },
  remove : function(userId){
    return User.isAdmin(userId);
  }
}