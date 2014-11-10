User.availableRoles = [
  "user",
  "admin",
  "customer"
];

User.isAdmin = function(user){
  return Roles.userIsInRole(user, ['admin', 'superadmin']);
}

User._defaults.roles = ['user', 'admin'];

Meteor.startup(function(){
  if(Meteor.roles.find().count() === 0)
    User._defaults.roles.forEach(Roles.createRole);
})