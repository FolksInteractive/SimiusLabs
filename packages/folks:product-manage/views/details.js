Template.productManageDetailsView.rendered = function(){}

Template.productManageDetailsView.helpers({
  formSchema : function(){
    return Product.schemas.details;
  }
});

Template.productManageDetailsView.events({
});

AutoForm.hooks({
  productDetailsForm : {    
    onSubmit: function(params) {      
      this.event.preventDefault();

      var form = this;
      var product = Router.current().data() || {};
      var handle = (product._id) ? handleUpdate : handleCreation;

      handle(product, params, function(err){
        if(err)
          return console.log(err);

        form.done();
      });
    },
  }
})

var handleCreation = function(product, params, cb){
  Product.create({details : params}, cb)
}
var handleUpdate = function(product, params, cb){
  Product.update(product._id, params, cb)
}
