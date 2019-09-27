// Way 1

/*var counter = function(arr){
  return 'There are' + arr.length + 'elements in the array';
};


var adder = function(a,b){
  return `The Sum Of The 2 Numbers is ${a+b}`;
};// Look carefully here we are using `` to express the Expression

var pi = 3.142;

module.exports.counter=counter;
module.exports.adder=adder;
module.exports.pi=pi;
*/


// Way 2

/*module.exports.counter = function(arr){
  return 'There are' + arr.length + 'elements in the array';
};


module.exports.adder = function(a,b){
  return `The Sum Of The 2 Numbers is ${a+b}`;
};// Look carefully here we are using `` to express the Expression

module.exports.pi= 3.142;
*/


// Way 3

/*var counter = function(arr){
  return 'There are' + arr.length + 'elements in the array';
};


var adder = function(a,b){
  return `The Sum Of The 2 Numbers is ${a+b}`;
};// Look carefully here we are using `` to express the Expression

var pi = 3.142;

module.exports={
  counter : counter,
  adder : adder,
  pi : pi

}
*/
