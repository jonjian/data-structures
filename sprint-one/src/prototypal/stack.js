var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.extraStorage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
}; 

stackMethods.pop = function() {
  if ((this.counter - 1) >= 0) {
    this.extraStorage[this.counter - 1 ] = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter--;
    return this.extraStorage[this.counter];
  } else {
    this.counter = 0;
    return this.counter;
  }
};

stackMethods.size = function () {
  return Object.keys(this.storage).length;
};