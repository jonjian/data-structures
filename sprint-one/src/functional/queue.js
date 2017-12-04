var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var back = 0;
  var extraStorage = {};
  var front = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function() {
    if ((back - front) > 0) {
      extraStorage[front] = storage[front];
      delete storage[front];
      front++;
      return extraStorage[front - 1];
    } else {
      back = 0;
      front = 0;
      return front;
    }
  };    

  someInstance.size = function() {
  
    return Object.keys(storage).length;
  };
  return someInstance;
};
