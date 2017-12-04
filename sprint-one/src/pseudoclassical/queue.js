var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.extraStorage = {};
  this.back = 0;
  this.front = 0;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
};

Queue.prototype.dequeue = function() {
  if (this.back - this.front > 0) {
    this.extraStorage[this.front] = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return this.extraStorage[this.front - 1];
  } else {
    this.back = 0;
    this.front = 0;
    return this.front;
  }
};


