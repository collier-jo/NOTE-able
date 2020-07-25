"use strict";
(function(exports) {


  function NoteController(list = new NoteList){
    this.list = list
    // this.urlChange = this.singleNote()
  };
  
  NoteController.prototype.add = function(text){
    console.log(this.list)
    return this.list.create(text)    
  };


  NoteController.prototype.addToPage = function(noteView = new NoteView(this.list)) {
    let insertNotesToPage = document.getElementById("app")
    insertNotesToPage.innerHTML = noteView.convertAllToHTML()
    this.singleNote(this.list)
    
    return insertNotesToPage.innerHTML
  }
  
  NoteController.prototype.singleNote = function(list){

    console.log("inside singlenote")

    window.addEventListener('hashchange', function() {
      console.log("inside event listener")

      var insertSingleNote = document.getElementById("single-note")
      let noteID = location.hash.split("#notes/")[1]
      console.log(list.list[0])

      insertSingleNote.innerHTML = list.list[noteID].tex
   
    }, false);
  }

  NoteController.prototype.logSubmit = function(){

    let submitForm = document.getElementById("form");
      
    submitForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var text = document.getElementById("text-area").value
      return event.srcElement.children[0].value
    })
  }


  exports.NoteController = NoteController;
 

})(this);
