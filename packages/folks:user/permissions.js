User.can = {
  list : function(userId){
    return User.isAdmin(userId)
  },
  read : function(userId, targetId){
    return User.isAdmin(userId)
  },
  create : function(userId){
    return User.isAdmin(userId)
  },
  update : function(userId, targetId){
    if(userId == targetId)
      return true;
    
    return User.isAdmin(userId)
  },
  remove : function(userId, targetId){
    if(userId == targetId)
      return false;

    return User.isAdmin(userId)
  }
}