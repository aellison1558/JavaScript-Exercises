Array.prototype.my_uniq = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    var included = false;

    for (var j = 0; j < result.length; j++) {
      if (this[i] === result[j]) {
        included = true;
      }
    }

    if (!included) {
      result.push(this[i]);
    }
  }
  return result;
}

Array.prototype.two_sum = function() {
  var result = [];

  for (var i = 0; i < (this.length - 1); i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

Array.prototype.myTranspose = function() {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    result.push([]);
    for (var j = 0; j < this.length; j++) {
        result[i].push(this[j][i]);
    }
  }
  return result;
}

Array.prototype.myEach = function(otherFunction) {
  for (var i = 0; i < this.length; i++) {
    otherFunction(this[i]);
  }
  return this;
}

Array.prototype.myMap = function(otherFunction) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(otherFunction(this[i]));
  }
  return result;
}

Array.prototype.myInject = function(otherFunction, initValue) {
  var i = 0;
  var result = initValue;
  if ((typeof initValue) === 'undefined'){
    result = this[0];
    i += 1;
  }
  for( ; i < this.length ; i++ ){
    result = otherFunction(result, this[i]);
  }
  return result;
}

Array.prototype.bubbleSort = function() {
  do {
    var swapped = false;
    for (var i = 0; i < this.length - 1; i++) {
      var j = i + 1;
      var nextValue = this[j];
      if (this[j] < this[i]) {
        this[j] = this[i];
        this[i] = nextValue;
        swapped = true;
      }
    }
  } while (swapped);

  return this;
}

var substrings = function(str) {
  var result = [];
  for (var i = 0 ; i < str.length ; i++){
    for (var j = i + 1 ; j <= str.length ; j++){
      result.push(str.substring(i, j));
    }
  }
  return result;
}

// console.log(substrings("abcdefg"))

function exp(base, power) {
  if (power === 0) {
    return 1;
  } else {
    return (base * exp(base, power - 1));
  }
}

function exp2(base, power) {
  if (power === 0){
    return 1;
  } else if (power === 1) {
    return base;
  } else if (power % 2 === 0) {
    return (exp(base, power / 2) * exp(base, power / 2));
  } else {
    var result = exp(base, (power - 1) / 2);
    return (base * result * result);
  }
}

// console.log(exp2(2, 3))


function fibb(n) {
  if (n===1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var result = fibb(n-1);
    result.push(result[n - 2] + result[n - 3]);
    return result;
  }
}
// console.log(fibb(10))

function bSearch(array, target) {
  var pivot = Math.floor(array.length / 2);
  if (array.length === 0) {
    return null;
  } else if (array[pivot] === target) {
    return pivot;
  } else if (array[pivot] > target) {
    return bSearch(array.slice(0, pivot), target);
  } else {
    return (bSearch(array.slice(pivot + 1, array.length), target) + pivot);
  }
}
// console.log(bSearch([1, 2, 3], 1))
// console.log(bSearch([2, 3, 4, 5], 3))
// console.log(bSearch([1, 2, 3, 4, 5, 6], 0))

function makeChange(amount, coins) {
  if (amount === 0){
    return [];
  }else if (amount < 0) {
    return null;
  } else {

    var shortest = null;
    for (var i = 0 ; i < coins.length ; i++){
      var result = makeChange((amount - coins[i]), coins);

      if (result !== null) {
        result.push(coins[i]);
        if (shortest===null || result.length < shortest.length){
          shortest = result;
        }
      }

    }
    return shortest;
  }
}
// console.log(makeChange(21, [10, 5, 2]))

function merge(left, right) {
  var result = []
  while(left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}

Array.prototype.mergeSort = function() {
  if (this.length <= 1) {
    return this;
  } else {
    var middle = Math.floor(this.length / 2);
    var left = this.slice(0, middle);
    var right = this.slice(middle, this.length);
    return merge(left.mergeSort(), right.mergeSort());
  }
}

var a = [4, 5, 3, 2, 10];
