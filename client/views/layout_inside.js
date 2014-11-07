Template.layoutInside.rendered = function(){
}

Template.layoutInside.helpers({
  'compressed' : function(){
    return Session.equals('layout.compressed', true) ? 'compressed' : '';
  },

  'view' : function(){
    return _.dasherize(Iron.controller().route.name);
  }

});

Template.layoutInside.events({
  
});