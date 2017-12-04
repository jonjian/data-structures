var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.front = 0;
  someInstance.extraStorage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};


queueMethods.dequeue = function() {
// use this here

  if ((this.counter - this.front) > 0 ) {
    this.extraStorage[this.front] = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return this.extraStorage[this.front - 1];
  } else {  
    this.counter = 0;
    this.front = 0;
    return this.front;
  }
};

queueMethods.enqueue = function(value) {
// use this here
  this.storage[this.counter] = value;
  this.counter++;
};

queueMethods.size = function() {
// use this here
 
  return Object.keys(this.storage).length;
};


