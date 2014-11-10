var events = Npm.require('events');
var util = Npm.require('util');

Stream = Import.Stream = function(){
  events.EventEmitter.call(this);
}
util.inherits(Stream, events.EventEmitter);

_.extend(Stream.prototype, {
  writeProduct : function(product){
    console.log('pushing', product);
    this.emit('product', product);
  },
  end : function(){
    this.emit('end')
  }
});