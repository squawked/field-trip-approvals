Template.assignFieldTrip.helpers({
  school: function() {
    UI._globalHelpers.consoleLog(" assignFieldTrip"); 
    return Schools.find();
  }
  
})