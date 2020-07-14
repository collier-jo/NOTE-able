"use strict";

(function(exports) {


  function NoteController(list = new NoteList){
    this.list = list
  };
  
  NoteController.prototype.add = function(text){
    this.list.create(text)
    return this.list.list
  };

  NoteController.prototype.view = function () {
    var testing = this.list.convertAllToHTML()
    return testing
  }

  NoteController.prototype.addToPage = function() {
    var insertNotesToPage = document.getElementById("app")
    insertNotesToPage.innerHTML = this.view()
    console.log(insertNotesToPage.innerHTML)
    return insertNotesToPage.innerHTML
  }
 
  exports.NoteController = NoteController;

})(this);

// var test = new NoteController
// test.add("Favourite drink: seltzer.")
// test.add("Testing ")
// test.add("Testing 2")
// test.view()
// test.addToPage()



