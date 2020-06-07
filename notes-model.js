"use strict";

(function(exports) {

  function Note(text) {
    this.text = text
  }

  Note.prototype.readOne = function(){
    return this.text
  }

  exports.Note = Note

})(this);



