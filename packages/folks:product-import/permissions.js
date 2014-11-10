Product.can.import = function(userId){
  return User.isAdmin(userId);
}