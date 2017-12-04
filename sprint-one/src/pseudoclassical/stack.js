var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.extraStorage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Stack.prototype.pop = function() {
  if (this.counter >= 0) {
    this.counter--;
    this.extraStorage[this.counter] = this.storage[this.counter];
    delete this.storage[this.counter];
    return this.extraStorage[this.counter];
  } else {
    this.counter = 0;
    return this.counter;
  } 
};