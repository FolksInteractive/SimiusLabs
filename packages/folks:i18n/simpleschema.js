// Translating simpleschema messages
// We have to wait for startup callback for the translation dictionnary gets populated
Meteor.startup(function(){
  if(!Package['aldeed:simple-schema'])
    return;
  // Making it reactive
  Tracker.autorun(function(){
    SimpleSchema.messages({
      required: TAPi18n.__("simpleschema.required"),
      minString: "[label] must be at least [min] characters",
      maxString: "[label] cannot exceed [max] characters",
      minNumber: "[label] must be at least [min]",
      maxNumber: "[label] cannot exceed [max]",
      minDate: "[label] must be on or before [min]",
      maxDate: "[label] cannot be after [max]",
      minCount: "You must specify at least [minCount] values",
      maxCount: "You cannot specify more than [maxCount] values",
      noDecimal: "[label] must be an integer",
      notAllowed: "[value] is not an allowed value",
    }); 
  })
})
