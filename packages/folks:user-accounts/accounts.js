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

Meteor.startup(function(){
  AccountsTemplates.init();
});