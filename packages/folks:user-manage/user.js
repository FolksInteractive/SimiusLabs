User.query = new ReactiveVar();
  
User.search = function(){
  var selector = {};
  var query = User.query.get();
  var regex = new RegExp(query, 'gi');

  if(query && query.length > 2)
    selector = {
      $or: [
        {'profile.firstname' : regex},
        {'profile.lastname' : regex}, 
        {'emails.address' : regex} 
      ] 
    }

  return Users.find(selector , {
    sort: {'profile.firstname': 1}, 
    transform : User.transform
  });
}

User._selected = new ReactiveVar();

User.select = function(user){
  if(_.isObject(user))
    user = user._id;

  // Storing user ID
  User._selected.set(user);
}
User.toggle = function (n) {
  User.isSelected(n) ? User.unSelect() : User.select(n)
} 
User.unSelect = function () {
  User._selected.set(null)
} 
User.noSelection = function () {
  return !User._selected.get()
} 
User.isSelected = function (user) {
  if(_.isObject(user))
    user = user._id;

  // Comparing user ID
  return User._selected.get() === user;
} 
User.selectedId = function () {
  return User._selected.get()
}
User.selected = function () {
  return User._selected.get() ? User.get(User._selected.get()) : null
}

// Adding selectivity to User class
_.extend(User.class.prototype, {
  select : function () {
    return User.select(this._id);
  },
  isSelected : function () {
    return User.isSelected(this._id);
  },
  unSelect : function () {
    return User.unSelect();
  },
  toggle : function () {
    return User.toggle(this._id);
  }
});