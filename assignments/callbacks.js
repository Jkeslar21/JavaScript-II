// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
}
function getLength(arr, cb) {
    return cb(arr.length)
}
getLength(items, function(length){
    console.log(length)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
}
function last(arr, cb) {
    return cb(arr[arr.length-1]);
}
last(items, function(lastIndex){
    console.log(lastIndex);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
function sumNums(x, y, cb) {
    return cb(x+y);
}
sumNums(4,5,function(addition) {
    console.log(addition);
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
function multiplyNums(x, y, cb) {
    return cb(x*y);
}
multiplyNums(3, 7, function(multiplication){
    console.log(multiplication);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i =0; i < list.length; i++){
      if (list.includes(item)) {
          return true;
      } else {
          return false;
      }
  }
}
contains('Gum', items)
console.log(contains('Gum', items))