// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function favActivity(activity){
  const fa = activity
  console.log(`I LOVE to play ${fa}!`);
  function beginner(){
      console.log(`Even as a beginner, I LOVED to play the ${fa}!`);
      function advanced(){
          console.log(`One thing i've come to appreciate over the years, is the magic that lies within an Acoustic ${fa}!`);
      } advanced();
  } 
  beginner()
}
favActivity('Guitar');

// ==== Challenge 2: Create a counter function ====
const counter = (function(count) {
  return function () {
    count+=1;
    return count;
  }
}(0));
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
 // Return a function that when invoked increments and returns a counter variable. 
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
