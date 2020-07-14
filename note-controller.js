"use strict";

(function(exports) {


  function NoteController(list = new NoteList){
    this.list = list
  };
  
  NoteController.prototype.add = function(text){
    return this.list.create(text)    
  };


  NoteController.prototype.addToPage = function() {
    var insertNotesToPage = document.getElementById("app")
    insertNotesToPage.innerHTML = this.list.convertAllToHTML()
    return insertNotesToPage.innerHTML
  }
 
  exports.NoteController = NoteController;

})(this);



