Users = Meteor.users;
User = {};

User.model = Meteor.users;

User.class = function(doc){
  _.extend(this, doc);
}
_.extend(User.class.prototype, {
  firstname : function(){
    return this.profile.firstname
  },
  lastname : function(){
    return this.profile.lastname
  },
  email : function(){
    return this.emails[0].address
  },
  
  fullname : function(){
    return this.profile.firstname + " " + this.profile.lastname;
  },
});

User._defaults = {
  profile : {
    firstname : "",
    lastname : ""
  },
  emails : [],
  enabled : true
}

User.defaults = function(){
  var defaults = _.clone(User._defaults);
  return _.extend(defaults,{
    createdAt : new Date()
  });
}

User.isLoggedIn = function() {
  return !!Meteor.user();
};

User.current = function(){
  return Meteor.user();
}

User.currentId = function(){
  return Meteor.userId();
}

User.transform = function(doc){
  return new User.class(doc);
}

User.get = function(id){
  return User.model.findOne(id, {transform : User.transform});
}

User.equals = function(user){
  // Comparing with user object passed
  if(_.isObject(user))
    return User.currentId() == user._id;

  // Comparing with the user ID (String) passed
  return User.currentId() == user;
}

User.create = function(params, cb){
  return Meteor.call('userCreate', params, cb);
}

User.update = function(targetId, params, cb){
  return Meteor.call('userUpdate', targetId, params, cb);
}

User.remove = function(params, cb){
  return Meteor.call('userRemove', params, cb);
}

User.disable = function(params, cb){
  return Meteor.call('userDisable', params, cb);
}