Template.registerHelper('date', function(date, format){
  format = format || 'MMMM Do YY';
  return moment(date).format(format);
});