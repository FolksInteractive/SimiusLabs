Avatar = User.Avatar = {
  size : 300,
  set : function(fileId, cb){
    Meteor.call('userAvatar', fileId, cb)
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

Avatars = User.Avatars = new FS.Collection("avatars", {
  'stores' : [
    new FS.Store.FileSystem("avatars", {
      // Modulus provide CLOUD_DIR path in the process env
      path : (Meteor.isServer) ? process.env.CLOUD_DIR || null : null,
      beforeWrite: function(file) {
        // Changing filename extension and type
        return {
          extension: 'png',
          type: 'image/png'
        };
      },
      transformWrite: function(file, readStream, writeStream) {
        gm(readStream)
          .resize(Avatar.size, Avatar.size , '^') 
          .gravity('Center')         
          .crop(Avatar.size, Avatar.size, 0, 0)
          .stream('PNG')
          .pipe(writeStream);
      }
    })
  ]
})

Avatars.allow({  
  'insert': function(userId, doc) {    
    return !!userId;
  },
  'update': function(userId, doc) {
    // only allow updating if you are admin
    return !!userId
  },
  'remove': function(userId, doc) {
    // only allow removing if you are admin
    return false
  },
  'download': function(userId, file) {
    return !!userId;
  }
});