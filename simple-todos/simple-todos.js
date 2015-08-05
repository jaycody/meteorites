/* 
1. Create MongoDB collection for tasks
2. then retrieve tasks from MongoDB collection
3. and populate todo list with tasks
*/

Tasks = new Mongo.Collection("tasks");

// retrieve tasks from mongoDB collection named 'tasks'
if (Meteor.isClient) {
  // create helpers
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  });
}


////////////////////////////////////////
/* set tasks statically (from pt 1 of tutorial)
if (Meteor.isClient) {
  // this code only runs on the client  
  Template.body.helpers({
    tasks: [
      { text: "This is task 1"},
      { text: "This is task 2"},
      { text: "This is task 3"}
    ]
  });
}
*/

