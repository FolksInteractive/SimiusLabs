Template.userManageDetailsView.rendered = function(){}

Template.userManageDetailsView.helpers({
  doc : function(){
    // Default doc when it is a new user
    var doc = {
      firstname : "",
      lastname : "",
      email : "",
      role : null
    }

    // Extend doc if a user is selected
    var selected = User.selected();
    if(selected)
      _.extend(doc, {
        firstname : selected.firstname(),
        lastname : selected.lastname(),
        email : selected.email(),
        role : selected.roles[0]
      });

    return doc;
  },

  isNew : function(){
    return User.noSelection();
  },

  userIsTarget : function(){
    return User.selectedId() == User.currentId();
  },

  avatar : function(){
    // If creating a new user
    if(!this.avatar)
      return "/img/avatar.png";

    return this.avatar();
  },

  formSchema : function(){
    return User.schemas.details;
  },

  changePwdSchema : function(){
    return User.schemas.changePwd;
  },

  role : function(){
    // If creating a new user
    if(!this.roles)
      return null;

    return this.roles[1] || this.roles[0];
  },

  roleType : function(){
     return Roles.userIsInRole(this, "superadmin");
  },

  email : function(){
    // If creating a new user
    if(!this.emails)
      return "";

    return this.emails[0].address;
  },

  roles : function(){
    var user = this;
    return _.map(User.availableRoles, function(role){
      return {
        label : _.humanize(role),
        value : role,
      }
    })
  },
});

Template.userManageDetailsView.events({
  'change input[name=avatar]': function(event, template) {
    var domFile = event.target.files[0];    
    var params = new FS.File(domFile);
    User.Avatars.insert(domFile, function(err, fsFile) {
      if(err)
        return console.log(err);

      // Call method to associate uploaded file as current user avatar
      User.Avatar.set(fsFile._id);
    });
  }
});

AutoForm.hooks({
  userDetailsForm : {
    onError:function(operation, error, template) {
      console.log(error);
    },
    onSubmit: function(params) {      
      this.event.preventDefault();

      var form = this;

      if(User.noSelection()) {
        User.create(params, function(err){
          if(err)
            return console.log(err);

          form.done();
        });

      } else{
        User.update(User.selectedId(), params, function(err){
          if(err)
            return console.log(err);

          form.done();
        });
      }
    },
  },

  changePwdForm : {
    onSubmit: function (params) { 
      this.event.preventDefault();
      
      var form = this;

      params = _.extend(params, {
        'userId' : User.currentId()
      });
      
      Accounts.changePassword(params.current, params.new, function(err){
        
        if(err){
          return console.log(err);        
        }

        form.done();
        form.resetForm();
      });
    }
  }
})