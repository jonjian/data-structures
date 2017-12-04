var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var extraStore = {};
  var counter = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    var countMinus = counter - 1;
    if (countMinus >= 0) {
      extraStore[countMinus] = storage[countMinus];
      counter--;
      delete storage[countMinus];  
      return extraStore[countMinus];
    } else {
      counter = 0;
      return counter;
    }
  };

  someInstance.size = function() {

    return counter;
  };

  return someInstance;
};
