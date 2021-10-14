/*
describe('shout(string)', function() {
    it('receives one argument and returns it in all caps', function() {
      expect(shout('hello')).toEqual('HELLO');
    })
  })
  */

  function shout(string) {
    return string.toUpperCase();
  }

  /*
  describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
  })
})
*/

function whisper(string) {
    return string.toLowerCase();
}

/*
describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  })
})
*/

function logShout(string) {
    console.log(string.toUpperCase ("hello"));
}

/*
describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})
*/

function logWhisper(string) {
    console.log(string.toLowerCase ("hello"));
}

/*
describe('sayHiToGrandma(string)', function() {
    it('returns "I can\'t hear you!" if `string` is lowercase', function() {
      expect(sayHiToGrandma('hello')).toEqual("I can't hear you!");
    })
  
    it('returns "YES INDEED!" if `string` is uppercase', function() {
      expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!");
    })
  
    it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
      expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.");
    })
  })
  */

  /*
  function sayHiToGrandma(string) {
      return ("I can\'t hear you!");

      if (string) isUpperCase;
      let text = "YES INDEED!";
      // if (uppercase) {
      // return ("YES INDEED!")
      }
      if (string === "I love you, Grandma.");
           text = "I love you, too.";
*/

/*
function sayHiToGrandma(string = string.toLowerCase) {
    return("I can\'t hear you!");
    if (string === string.toUpperCase()) {
        return("YES INDEED!");
    }
    if (string = "I love you, Grandma.") {
        return("I love you, too.");
     }
}
*/

// 6 passes, 1 fail below
/*
function sayHiToGrandma(string = string.toLowerCase) {
    console.log("I can\'t hear you!");
    if (string === string.toUpperCase()) {
        return("YES INDEED!");
    }
    if (string = "I love you, Grandma.") {
        return("I love you, too.");
     }
}

sayHiToGrandma;
*/

/*
function sayHiToGrandma(string) {
    if (string = string.toLowerCase()) {
        console.log("I can\'t hear you!");
    }
    else if (string = string.toUpperCase()) {
        console.log("YES INDEED!");
    }
    else if (string = "I love you, Grandma.") {
        return("I love you, too.");
     }
}

sayHiToGrandma;
*/

/*
function sayHiToGrandma (string = string.toUpperCase) {
    return("YES INDEED!");
}

 function sayHiToGrandma (string = "I love you, Grandma.") {
    return("I love you, too.");
 }
 */

// if (string = string.toUpperCase) {
   //  console.log("YES INDEED!");
// }

    // if (string === string.toUpperCase);
    // alert ("YES INDEED!");
    
   // if (string === "I love you, Grandma.");
     //    text = "I love you, too.";

     /*
     function sayHiToGrandma(string) {
        // let result;
        if (string === string.toLowerCase()) {
            return "I can't hear you!";
        } else if (string === string.toUpperCase()) {
            return "YES INDEED!";
        } else if (string === ("I love you, Grandma.")) {
            return "I love you, too.";
         }
         // return result;
    }
    */

    function sayHiToGrandma(string) {
        if (string === string.toLowerCase()) {
            return "I can't hear you!";
        } else if (string === string.toUpperCase()) {
            return "YES INDEED!";
        } else if (string === ("I love you, Grandma.")) {
            return "I love you, too.";
         }
    }