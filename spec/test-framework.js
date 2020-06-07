function it(label, callback) {
    console.log("Test: " + label)
    callback()
  }
  
  function expect(a){
    return {
      toEq: function(b){
        if(a === b){
            console.log("Pass")
        }else{
            console.log("Fail")
        }
      },
  
      toInclude: function(b){
        if(a.includes(b)){
          console.log("Pass")
        }else{
            console.log("Fail")
        }
      },

    //   isNode: 

    //   isHTML 
    }
  }