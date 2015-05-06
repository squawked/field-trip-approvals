  // To add Iron Router
// meteor add iron:router
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [
          Meteor.subscribe('carpools'), Meteor.subscribe('parents'),Meteor.subscribe('classes'),       
          Meteor.subscribe('schools'),
          Meteor.subscribe('fieldTrips'), Meteor.subscribe('students')
           
    ];
 }
});

Router.route(
  '/classList', {
     name: 'classList',
     template: 'classList'
    
});

Router.route(
  '/schoolList', {
     name: 'schoolList',
     template: 'schoolList'
    
});

Router.route(
  '/assignFieldTrip', {
     name: 'assignFieldTrip',
     template: 'assignFieldTrip'
    
});