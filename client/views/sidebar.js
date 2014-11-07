Template.sidebar.rendered = function(){
  this.$('#side-menu').metisMenu();
}

Template.sidebar.helpers({
  'isCompressed' : function(){
    return Session.equals('layout.compressed', true);
  }
});

Template.sidebar.events({
  
});