Template.productManageTable.rendered = function(){}

Template.productManageTable.helpers({
  enabled : function(){
    return true;
  },

  products : function(){
    return Product.search();
  },
});

Template.productManageTable.events({});