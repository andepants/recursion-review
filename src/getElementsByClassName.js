// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//input: string of className
//output: an array of nodes or elements that have the classname in it
//edge cases: none
//cosntraints: have to use recursion, or actual function, use document.body, element.childNodes, and element.classList

//strategy
// Access the body of the element and iterate through entire node list using element.childNodes. Use element.classList to check if class name is equal to the input className.

var getElementsByClassName = function(className, node) {
  // console.log className
  // Declare result array
  var result = [];
  var node = node || document.body;
  if (node.classList) {
    for (var j = 0; j < node.classList.length; j++) {
      if (node.classList[j] === className) {
        result.push(node);
      }
    }
  }
  for (var i = 0; i < node.childNodes.length; i++) {
    var currentChild = node.childNodes[i];
    result = result.concat(getElementsByClassName(className, currentChild));
  }
  console.log(result);
  return result;
};


