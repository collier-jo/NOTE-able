"use strict";
(function(exports) {


  function NoteController(list = new NoteList){
    this.list = list
    this.note = ""
  };
  
  NoteController.prototype.add = function(text){
    this.list.create(text)  
    this.addToPage()
    return this.list
  };


  NoteController.prototype.addToPage = function(noteView = new NoteView(this.list)) {
    let insertNotesToPage = document.getElementById("app")
    insertNotesToPage.innerHTML = noteView.convertAllToHTML()
    this.singleNote(this.list)
    
    return insertNotesToPage.innerHTML
  }
  
  NoteController.prototype.singleNote = function(list){
    window.addEventListener('hashchange', function() {
      var insertSingleNote = document.getElementById("single-note")
      let noteID = location.hash.split("#notes/")[1]
      insertSingleNote.innerHTML = list.list[noteID].text
   
    }, false);
  }

  NoteController.prototype.logSubmit = function(){

    event.preventDefault()
    let newNote = document.getElementById("text-area").value
    this.add(newNote)
  }


  exports.NoteController = NoteController;
 

})(this);
