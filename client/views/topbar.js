Template.topbar.rendered = function(){

}

Template.topbar.helpers({

});

Template.topbar.events({
  'click .compress-toggler' : function(e, template){
    e.preventDefault();
    var toggle = !Session.get('layout.compressed')
    Session.set('layout.compressed', toggle);
  },

  'click .logout-link' : function(e, template){
    e.preventDefault();

    Meteor.logout();
  }
});