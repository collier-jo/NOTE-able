"use strict";

(function(exports) {

  function NoteList() {
    this.list = []
    this.noteID = 0
  }

  NoteList.prototype._add = function(note){
    this.list.push(note)
  } 

  NoteList.prototype.readAll = function(){
    return this.list
  } 

  NoteList.prototype.create = function(text){
    var note = new Note(text, this.noteID)
    this._noteID()
    this._add(note)
    return note
  }

  NoteList.prototype._noteID = function() {
    this.noteID ++ 
  }

  exports.NoteList = NoteList;

})(this);
