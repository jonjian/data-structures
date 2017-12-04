var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = []; //empty array?  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
//use this
  this.children.push(Tree(value));

};

treeMethods.contains = function(target) {
//use recursion
// use this?

// check if this.value === target if yes return true
// else if this.children.length < 0? return false
// else for loop i = 0; 
// if this.children[i].value === target return true
// if  this.children[i].children.length > 0? 
// return this.contains(target, this.children)

  if (this.value === target) {
    return true;
  } 
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target) === true) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
