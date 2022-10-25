// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:

// I - JSON string
// O - Value or object described by the string
// C - Use recursion
// E - Optional reviver function

// Strategy
//iterate through string
  // Check for opening curly brace or bracket (array or object)
    //for looop iterate through the string after the opening curly brace
      //
      //check each element if it equals a closing bracket

    //create variable, array or object

    //tempPosition to comma
      //iterate through string after the open bracket

    //Split the JSON string on the commas
    // Declare storage variable


  //check for parentheses for string
    //return as string
  //chck for numbers
  //check for boolean

  var parseJSON = function(json) {
    // your code goes here
  };
