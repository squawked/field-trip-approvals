// To turn off autopublishing, run
// meteor remove autopublish

Meteor.publish('schools', function() {
  return Schools.find();
});
Meteor.publish('students', function() {
  return Students.find();
});

Meteor.publish('classes', function() {
  return Classes.find();
});

Meteor.publish('parents', function() {
  return Parents.find();
});

Meteor.publish('fieldTrips', function() {
  return FieldTrips.find();
});

Meteor.publish('carpools', function() {
  return Carpools.find();
});