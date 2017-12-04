var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value) {
    var newLast = Node(value);
    if (list.head === null) { 
      list.head = newLast;
      list.tail = newLast;
    } else {
      var lastNode = list.tail; 
      lastNode.next = newLast;
      list.tail = newLast;
    }
  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = oldHead.next;
    return oldHead.value;
  };

  list.contains = function(target, node = list.head) {
    //var finder = function(node, target) {
    if (node.value === target) {
      return true;
    }
    if (node.next === null) {
      return false;
    }
    return list.contains(target, node.next);
    //}; 
    //return finder(list.head, target);    

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? linear
 */
