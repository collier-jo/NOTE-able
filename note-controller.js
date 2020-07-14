"use strict";

(function(exports) {


  function NoteController(list = new NoteList){
    this.list = list
  };
  
  NoteController.prototype.add = function(text){
    this.list.create(text)
  };

  NoteController.prototype.view = function () {
    var testing = this.list.convertAllToHTML()
    console.log(testing)
    return testing
  }

  NoteController.prototype.addToPage = function() {
    var test2 = document.getElementById("app")
    test2.innerHTML = this.view()
  }
 
  exports.NoteController = NoteController;

})(this);

var test = new NoteController
test.add("Favourite drink: seltzer.")
test.add("Testing ")
test.add("Testing 2")
test.view()
test.addToPage()



// Takes a note list model as a parameter. √
// Adds a note that says Favourite drink: seltzer. √
// Creates a note list view, passing in the note list model.
// The note controller has a method that gets HTML from the 
// note list view and inserts it into the app element.