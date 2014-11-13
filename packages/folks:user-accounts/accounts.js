AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: false,
    showPlaceholders: true,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: true,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,

    // Privacy Policy and Terms of Use
    // privacyUrl: 'privacy',
    // termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    texts : {
      title: {
        signIn : "welcome",
        signUp : "Create your Account"
      }
    }
  });

AccountsTemplates.configureRoute('signIn', {
  layoutTemplate : 'layoutOutside'
});
AccountsTemplates.configureRoute('signUp', {
  layoutTemplate : 'layoutOutside'
});
AccountsTemplates.configureRoute('enrollAccount', {
  layoutTemplate : 'layoutOutside'
});
AccountsTemplates.configureRoute('forgotPwd', {
  layoutTemplate : 'layoutOutside'
});
AccountsTemplates.configureRoute('resetPwd', {
  layoutTemplate : 'layoutOutside'
});
AccountsTemplates.configureRoute('verifyEmail', {
  layoutTemplate : 'layoutOutside'
});

// Configuring fields
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: 'firstname',
      type: 'text',
      placeholder: "First name",
      displayName: "First name",
      required : true,
  },
  {
      _id: 'lastname',
      type: 'text',
      placeholder: "Last name",
      displayName: "Last name",
      required : true,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email address',
  }
]);