Meteor.publish('users', function(){

  // Return nothing if user is not loggedIn
  if(!this.userId)
    return this.ready();

  if(!User.can.list(this.userId))
    return this.ready();

  var usersCursor = Users.find();
  var usersIds = usersCursor.map(function(user){ return user._id });
  var avatarsCursor = User.Avatars.find({ userId: {$in: usersIds} });

  return [
    usersCursor,
    avatarsCursor
  ]
});

Meteor.publish('user', function(userId){
  check(userId, String);

  // Return nothing if user is not loggedIn
  if(!this.userId)
    return this.ready();

  if(!User.can.read(this.userId, userId))
    return this.ready();

  return [
    Users.find({_id: userId}),
    User.Avatars.find({ userId: userId })
  ]
})
