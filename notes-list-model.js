"use strict";

(function(exports) {

  function NoteList() {
    this.list = []
    this.noteID = 0
  }

  NoteList.prototype.add = function(note){
    this.list.push(note)
  } 

  NoteList.prototype.readAll = function(){
    return this.list
  } 

  NoteList.prototype.create = function(text){
    var note = new Note(text, this.noteID)
    this._noteID()
    return note
  }

  NoteList.prototype._noteID = function() {
    this.noteID ++ 
  }

  exports.NoteList = NoteList;

})(this);









// Has a method that, when called, returns a string of HTML 
// that represents the note list model. For example: 
// <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
// Handles a note list model that has no notes, one note or several notes.
