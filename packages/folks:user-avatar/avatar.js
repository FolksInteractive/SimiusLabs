Avatar = User.Avatar = {
  size : 300,
  // path : '/app-storage/avatars', // Compatible with Modulus
  set : function(fileId, cb){
    Meteor.call('avatarUpload', fileId, cb)
  },
};



// Add avatar method to User class
_.extend(User.class.prototype, {
  avatar : function() {
    var avatar = Avatars.findOne({userId : this._id});
    
    if(avatar)
      return avatar.url();

    return "/img/avatar.png";
  },
});