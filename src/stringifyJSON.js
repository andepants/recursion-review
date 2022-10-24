// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//input: object, can be string, integer, array, boolean
//output: a string
//edge cases: none
//constraints: use recursion

//strategy:
//check type of object, the return the correct format with string, if nested in array
// use recursion to use for the cases

//pseudocode:

//check if string
  //return quotations around obj

//check if array
  // Declare empty array, result
  //iterate over array
    // result = recursively call on each element
    // push result to empty array

  //return '[' + result.join + ']'

//return obj.toString

//check if obj
  //declare empty array
  //iterate through obj
    // check if undefined

    // check if function

    // push key value pair to array result

  //return the format with join with curly braces

//check if obj === null
  //return 'null'


var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj  + '"';
  }

  if (Array.isArray(obj)) {
    var result = [];
    for (var i = 0; i < obj.length; i++) {
      result.push(stringifyJSON(obj[i]));
    }
     return '[' + result.join(',') + ']';
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'object') {
    var result = [];
    for (var keys in obj) {
       if (obj[keys] === undefined || typeof obj[keys] === 'function') {
         continue;
       }
       var string = stringifyJSON(keys) + ':' + stringifyJSON(obj[keys]);
       result.push(string);
    }
    return '{' + result + '}';
  }


  return '' + obj;
};
