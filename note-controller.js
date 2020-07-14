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

// var test = new NoteController
// test.add("Favourite drink: seltzer.")
// test.add("Testing ")
// test.add("Testing 2")
// test.view()
// test.addToPage()



// A note controller can be instantiated.
// The innerHTML property of the app element 
// contains HTML somewhat similar to: 
// <ul><li><div>Favourite food: pesto</div></li></ul>. 
// (You'll need to mock some stuff to achieve this.)