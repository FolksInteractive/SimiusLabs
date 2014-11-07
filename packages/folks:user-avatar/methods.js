// Avatar upload Method
Meteor.methods({
  avatarUpload : function(fileId) {
    if(!User.isLoggedIn())
      return;

    if(!User.can.upsert(this.userId))
      throw new Meteor.Error(403);

    //Remove previous avatar
    Avatars.model.remove({'userId' : User.currentId()});

    Avatars.update(fileId, {
      'userId' : User.currentId()
    });
  }
})