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

  exports.NoteList = NoteList;

})(this);