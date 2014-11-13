Meteor.methods({

  userDisable : function(params) {
    check(params, {
      userId : String,
      enabled: Boolean
    })

    if(!User.isLoggedIn())
      return;

    if(!User.can.remove(this.userId, params.userId))
      return;

    return params.userId; 
  },

  userRemove : function(params) {
    check(params, {
      userId : String
    });

    if(!User.isLoggedIn())
      return;

    if(!User.can.remove(this.userId, params.userId))
      throw new Meteor.Error(403);

    User.Avatars.remove({userId:params.userId});

    Users.remove(params.userId);
  },

  userCreate : function(params){
    var newUserParams = _.extend(User.defaults(), {
      emails : [{
        address : params.email,
        verified : false
      }],
      profile: {
        firstname : params.firstname,
        lastname : params.lastname,
      }
    });

    // Creating user on client side
    // we are not using createUser() on the client side
    // because it automatically logs the user in on success and we don't want that
    if( this.isSimulation ){  
      userId = User.model.insert(newUserParams);

    // Creating user on Server side
    }else{
      userId = Accounts.createUser({
        email: newUserParams.emails[0].address,
        profile: newUserParams.profile,
      });

      Accounts.sendEnrollmentEmail(userId);
    }

    return userId;
  },

  userUpdate : function(targetId, params){
    check(targetId, String);
    check(params, User.schemas.details);

    if(!User.can.update(this.userId))
      throw new Meteor.Error(403);

    User.model.update(targetId, {$set:{
      "profile.firstname" : params.firstname,
      "profile.lastname" : params.lastname,
      "emails.0.address" : params.email
    }});

    // A superadmin can't be downgraded 
    if(!Roles.userIsInRole(targetId, "superadmin"))
      Roles.setUserRoles(targetId, params.role);
  },

});