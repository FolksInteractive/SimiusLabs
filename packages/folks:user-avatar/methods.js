// Avatar upload Method
Meteor.methods({
  userAvatar : function(fileId) {
    if(!User.isLoggedIn())
      return;

    if(!User.can.update(this.userId))
      throw new Meteor.Error(403);

    //Remove previous avatar
    Avatars.remove({'userId' : User.currentId()});

    Avatars.update(fileId, {
      'userId' : User.currentId()
    });
  }
})