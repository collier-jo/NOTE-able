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
   
    var string = this.list.join("")

    return `<ul><li><div>${string}</div></li></ul>`

    // for(var index = 0; index < arr.length; index ++){
    //   console.log("Hello") 
    // }
  }

  exports.NoteList = NoteList;

})(this);
