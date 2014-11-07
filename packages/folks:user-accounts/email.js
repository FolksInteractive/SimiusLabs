// Customizing Accounts email template
Accounts.emailTemplates.siteName = Mail.siteName;
Accounts.emailTemplates.from = Mail.from;

_.extend(Accounts.emailTemplates.enrollAccount, {
  subject : function (user) {
    return "Invitation to join Simiuslabs";
  },
  html : function (user, url) {
    return Mail.render('emailInvite', {user: user, url: url});
  }
});

// _.extend(Accounts.emailTemplates.enrollAccount, {
//   subject : function (user) {
//     return "Reset your password";
//   },
//   html : function (user, url) {
//     return Mail.render('emailResetPwd', {user: user, url: url});
//   }
// });