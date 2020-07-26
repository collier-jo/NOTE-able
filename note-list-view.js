"use strict";

(function(exports) {

  function NoteView(noteList) {
    this.noteList = noteList.readAll()
  }
  
  NoteView.prototype.convertAllToHTML = function(){
    
    var html = ["<ul>"]
  
    for(var index = 0; index < this.noteList.length; index ++){
      var string = this.noteList[index]["text"]
      var shortHand = this._shortNote(string)
      var id = this.noteList[index]["id"]
      html.push(`<li><a href=#notes/${id} id=${id}>${shortHand} ... </a></li>`)
    }
  
    html.push("</ul>")
    var stringHtml = html.join("")
    return stringHtml
  }

  NoteView.prototype._shortNote = function(string){
    return string.substring(0,20)
  }

  exports.NoteView = NoteView;

})(this);


