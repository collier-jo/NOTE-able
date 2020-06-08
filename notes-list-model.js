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
    var arr = this.list
    var html = ["<ul>"]

    for(var index = 0; index < arr.length; index ++){
      var string = arr[index].toString()
      html.push(`<li><div>${string}</div></li>`)
    }

    html.push("</ul>")
    var stringHtml = html.join("")
  
    return stringHtml
  }

  exports.NoteList = NoteList;

})(this);
