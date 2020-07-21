"use strict";

(function(exports) {

  function NoteView(noteList) {
    this.noteList = noteList.readAll()
  }

  NoteView.prototype.convertAllToHTML = function(){
    
    var html = ["<ul>"]
  
    for(var index = 0; index < this.noteList.length; index ++){
      var string = this.noteList[index]
      var shortHand = this._shortNote(string)
      html.push(`<li><div id=${index}>${shortHand}</div></li>`)
    }
  
    html.push("</ul>")
    var stringHtml = html.join("")
    console.log(stringHtml)
    return stringHtml
  }

  NoteView.prototype._shortNote = function(string){
    return string.substring(0,20)
  }

  exports.NoteView = NoteView;

})(this);
