//console.log("I Am NodeJs Coder");
//console.log('Hello');
/*setTimeout(function(){
  console.log("Welcome To NodeJs");
},3000);*/

/*var time=0;
setInterval(function(){
  time=time+2;
  console.log(time+'second have passed');
},2000);*/


/*var time=0;
var timer= setInterval(function(){
  time=time+2;
  console.log(time+'second have passed');
  if(time>5){
    clearInterval(timer);
  }
},2000);
*/

//console.log(__dirname);
//console.log(__filename);

/*function sayHi(){
  console.log("HI FRans");
}
sayHi();
*/



/*function callFunction(fun){
  fun();
};



var sayBye = function(){
  console.log("Function Expression");
};

//sayBye();
callFunction(sayBye);
*/


/*var counter= require('./count');
console.log(counter(['inki','pinki','chinki']));

*/


var stuff= require('./stuff');
console.log(stuff.counter(['inki','pinki','chinki']));
console.log(stuff.adder(5,6));
console.log(stuff.pi);
console.log(stuff.adder(stuff.pi,6));
