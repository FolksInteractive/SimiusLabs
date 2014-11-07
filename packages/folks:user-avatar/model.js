Avatars = User.Avatars = new FS.Collection("avatars", {
  'stores' : [
    new FS.Store.FileSystem("avatars", {
      path : Avatar.path,
      beforeWrite: function(file) {
        // Changingfilename extension and type
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