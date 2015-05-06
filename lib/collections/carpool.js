Carpools = new Mongo.Collection('carpools');

/*

Meteor.methods({
  bookInsert: function(bookAttributes) {
    check(Meteor.userId(), String);

    // need to check votes as well
    check(bookAttributes, {
      book_title: String,
      ISBN: String,
      author: String,
      associate_link: String,
      URL: String,
      votes: 1
    });

    // var user = Meteor.user();
    // var post = _.extend(postAttributes, {
    //   userId: user._id, 
    //   author: user.username, 
    //   submitted: new Date()
    // });

    var book_id = Books.insert(bookAttributes);
    return {
      book_id: book_id
    };
  },
  incrementVotes: function(book_id) {
    Books.update({_id: book_id}, {$inc: {votes: 1}});
  }
});
*/
