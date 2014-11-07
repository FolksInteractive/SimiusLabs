console.log(Mail)
Mail.compileTemplate('emailInvite', Assets.getText('email_templates/invite.html'));

Template.emailInvite.helpers({});
