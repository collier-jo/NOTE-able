"use strict";

(function(exports) {

  function NoteList() {
    this.list = []
  }

  NoteList.prototype.add = function(note){
    var extractedNoteText = note.text
    this.list.push(extractedNoteText)
  } 

  NoteList.prototype.readAll = function(){
    return this.list
  } 

  NoteList.prototype.create = function(text){
    var note = new Note(text)
    this.add(note)
  }

  NoteList.prototype.convertAllToHTML = function(){
    
    
    return "<ul><li><div>Good'ay</div></li></ul>"

    // for(var index = 0; index < arr.length; index ++){
    //   console.log("Hello") 
    // }
  }

  exports.NoteList = NoteList;

})(this);


// Has a method that, when called, returns a string of HTML 
// that represents the note list model. For example: 
// <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.
