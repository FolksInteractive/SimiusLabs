Template.userManageTable.rendered = function(){

}

Template.userManageTable.helpers({
  users : function(){
    return User.search();
  },

  // Scope on a single user
  badge : function(){
    var badge;
    if(User.isAdmin(this._id)){
      badge = {label : 'admin', color : 'danger'}
    }else{
      badge = {label : 'user',  color : 'info'}
    }

    return badge;

  },
  
  email : function(){
    return this.emails[0].address;
  },

  himself : function(){
    return this._id == User.currentId()
  }
});

Template.userManageTable.events({
  'click .disable-btn' : function(e){
    e.preventDefault();

    var params = {userId: this._id, enabled: false};

    User.disable(params, function(err){
      if(err)
        return console.log(err);
    });
  },

  'click .remove-btn' : function(e){
    e.preventDefault();

    var confirm = window.confirm(TAPi18n.__('users.confirm_remove', {name:this.fullname()}))

    if(confirm){
      User.remove({userId: this._id}, function(err){
        if(err)
          return console.log(err);
      });
    }
  }
});