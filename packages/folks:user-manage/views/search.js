Template.userManageSearch.events({
  'keyup .search-input' : _.throttle(function(e){
    User.query.set(e.target.value);
  }, 300),
});