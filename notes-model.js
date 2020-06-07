"use strict";

(function(exports) {

  class Note {
    constructor(text){
      this.text = text;
    } 
    
    readOne(){
      return this.text;
    };
  }

  exports.note = Note;


})(this);
