Product.schemas = {};

// Schema defined in startup callback to get the TAPi18n ready
Meteor.startup(function(){
  var baseSchema = {
    valid : {
      type : Boolean,
      label: TAPi18n.invoke('product.valid'),
    },
    enabled : {
      type : Boolean,
      label: TAPi18n.invoke('product.enabled')
    },
    createdAt : {
      type : Date,
      label: TAPi18n.invoke('product.created_at')
    }
  }

  var detailsSchema = {
    sku: {
      type: String,
      label: TAPi18n.invoke('product.sku')
    },

    name: {
      type: String,
      label: TAPi18n.invoke('product.name')
    },

    description: {
      type: String,
      label: TAPi18n.invoke('product.description')
    },

    price: {
      type: Number,
      label: TAPi18n.invoke('product.price')
    },

    'options.$': {
      label: TAPi18n.invoke('product.options'),
      optional: true
    },

    'options.$.name': {
      type : String,
      label: TAPi18n.invoke('product.option.name')
    },

    'options.$.description': {
      type : String,
      label: TAPi18n.invoke('product..option.description')
    },

    'options.$.price': {
      type : Number,
      label: TAPi18n.invoke('product.option.price')
    },
  }

  Product.schemas.base = new SimpleSchema(baseSchema);
  Product.schemas.details = new SimpleSchema(detailsSchema);
});