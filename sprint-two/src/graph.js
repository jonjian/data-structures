

// Instantiate a new graph
var Graph = function() {
  this.instance = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.instance[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.instance.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
// find this.instance[node] and access values in its array
  for (var i = 0; i < this.instance[node].length; i++) {
    if (this.hasEdge(node, this.instance[node][i])) {
      this.removeEdge(this.instance[node][i], node);
    }
  }

  delete this.instance[node];
//for loop: for this.instance[node]
// see iff this.hasEdge(node,this.instance[node][i])
  //if true, this.removeEdge(this.instance[node][i], node)
// delete this.instance[node]  







// find node to remove (this.instance[node])
  // if this.instance[node] .length > 0
//   if (this.instance[node].length > 0) {
//     for(var i = 0; i < this.instance[node].length; i++) {
//       if ()

//       this.removeEdge( , this.instance[node]);
// }
//   }
  
//   delete this.instance[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //find fromNode
  if (this.instance[fromNode].indexOf(toNode) > -1) {
    return true;
  } else {
    return false;
  }
  //find array in fromNode
  //use indexOf fromNode to toNode to see if > -1
  //if it exists then return true, if not return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //push fromNode into array at toNode
  //push toNode into array at fromNode
  this.instance[fromNode].push(toNode);
  this.instance[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //find key fromNode
  var delNode = this.instance[fromNode].indexOf(toNode);
  var delSecond = this.instance[toNode].indexOf(fromNode);
  this.instance[fromNode].splice(delNode, 1);
  this.instance[toNode].splice(delSecond, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var k in this.instance) {
    cb(k);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


