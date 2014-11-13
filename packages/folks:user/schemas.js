User.schemas = {};
// Schema defined in startup callback to get the TAPi18n ready
Meteor.startup(function(){
  var baseSchema = {
    firstname: {
      type: String,
      label: TAPi18n.invoke('firstname')
    },
    lastname: {
      type: String,
      label: TAPi18n.invoke('lastname')
    },
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email,
      label: TAPi18n.invoke('email')
    },
    // enabled: {
    //   type: Boolean,
    //   label: TAPi18n.invoke('enabled'),
    //   autoform: {
    //     leftLabel: true
    //   },
    //   optional: true
    // },
    role: {
      type: String,
      label: TAPi18n.invoke('role'),
      allowedValues: User.availableRoles, // availableRoles is defined in lib/roles.js
      optional: true
    }
  }
  User.schemas.details = new SimpleSchema(baseSchema);
  
});

// Change Password Schema
Meteor.startup(function(){
  User.schemas.changePwd = new SimpleSchema({
    current : {
      type: String,
      label: TAPi18n.invoke("user_manage.current_password"),
      min: 5
    },
    new: {
      type: String,
      label: TAPi18n.invoke("user_manage.new_password"),
      min: 5
    },
    confirmed: {
      type: String,
      label: TAPi18n.invoke('user_manage.confirm_password'),
      min: 5,
      custom: function () {
        if (this.value !== this.field('new').value) {

          console.log(TAPi18n.__('user_manage.password_mismatch'))
          return TAPi18n.__('user_manage.password_mismatch');
        }
      }
    }
  });
});