

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  if (this._storage.get(index) === undefined) {
    var bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {
    //for loop to check this._storage.get(index)[0] for k
    for (i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
      } else {
    // if it equals then we replace this._storage.get(index)[1] = v
    //else
        this._storage.get(index).push(tuple);//push(tuple); 
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice(this._storage.get(index)[i], 1);
    }
  
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


