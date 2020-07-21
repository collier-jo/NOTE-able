"use strict";

(function(exports) {

  function NoteView(noteList) {
    this.noteList = noteList.readAll()
  }

  NoteView.prototype.convertAllToHTML = function(){
    
    var html = ["<ul>"]
  
    for(var index = 0; index < this.noteList.length; index ++){
      var string = this.noteList[index].toString()
      html.push(`<li><div id=${index}>${string}</div></li>`)
    }
  
    html.push("</ul>")
    var stringHtml = html.join("")

    console.log(stringHtml)
  
    return stringHtml


  }

  exports.NoteView = NoteView;

})(this);
