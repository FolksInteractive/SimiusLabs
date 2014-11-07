var preloadSubscriptions = ["currentUser"];

Router.configure({
  layoutTemplate: 'layoutInside',
  // loadingTemplate: 'loading',
  // notFoundTemplate: 'notFound',
  waitOn: function () {
    return _.map(preloadSubscriptions, function(sub){
      // can either pass strings or objects with subName and subArguments properties
      if (typeof sub === 'object'){
        Meteor.subscribe(sub.subName, sub.subArguments);
      }else{
        Meteor.subscribe(sub);
      }
    });
  }
});


var filters = {
  isReady: function(pause){
    if(!this.ready())
      pause();  

    this.next();
  },

  isLoggedIn: function(pause) {
    if (this.ready() && !Meteor.loggingIn() && !User.isLoggedIn()) {
      this.redirect('/sign-in');
    }

    this.next();
  },

  isAdmin: function(pause) {
    if(!this.ready() || (!Meteor.loggingIn() && !User.isLoggedIn())) return;

    if(!User.isAdmin()){
      this.redirect('dashboard');
      pause(); 
    }

    this.next();
  }
};

Router.onBeforeAction(filters.isReady);
Router.onBeforeAction(filters.isLoggedIn, {
    except: ['root', 'atSignIn', 'atSignUp', 'atForgotPwd', 'atEnrollAccount']
});

Meteor.startup(function () {

  Router.map(function() {
    this.route('root', {
      path: '/',
      action : function(){
        Router.go('dashboard');
      }
    });

    this.route('dashboard', {
      path: '/dashboard',
      template : 'dashboard',
      controller : App.RouteController
    });

  });

});