// Simply 'inherites' helpers from AccountsTemplates
Template.atTitle.helpers(AccountsTemplates.atTitleHelpers);

Template.atTitle.helpers({
  showWelcome : function(){
    return AccountsTemplates.getState() == "signIn";
  }
});