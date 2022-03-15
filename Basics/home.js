console.log("hello");
//console.log('hell2');
//alert('yoo')

//variables

var hello = "smoothie";
console.log(hello);

var num = 5;
console.log(num);

// document.getElementById('go').innerHTML = 'hey there!!'

// var age=prompt('what is your age')

// document.getElementById('go').innerHTML = age

//numbers
var num1 = 5.7;
num = num1 + 1 + num;
num++;
console.log(num1); // 5.7
console.log(num1 / 10); //0.57000
console.log(num); //12.7
num--;
console.log(num);

//Divide ,Multiply ,remainders

console.log(num1 % 3);

num += 10;
console.log(num);
num -= 10;
console.log(num);

//FUNCTIONS

function fun() {
  console.log("this is a funciton");
}
fun();

function fun1(name) {
  // var name = prompt('what is your name') ;
  var result = "hello" + " " + name;
  console.log(result);
}
// fun1()

function fun2(a, b) {
  var result = a + b;
  console.log(result);
}
fun2(1, 2);
fun2("hello", "gokul");
fun2("0", 1); //01 string
fun2(1, "2"); //12 string

var na = prompt("what is your name");
fun1(na);

k = 0;
while (k < 10) {
  k += 1;
  console.log(k);
}
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//DATATYPES

var yage = 19; //number
var name1 = "sd"; // string
let youname = { first: "Jane", last: "doe" }; //object
let truth = false; //boolean
let list = ["1", "s", "s"]; //array
let mix = ["a", 1];
let newa = "sa"; //undefined
let noting = null; //null

//string in JS
//\n next line
let fruit = "banana,hgch";
let morefruit = "banana\napple";
console.log(morefruit);
console.log(fruit.indexOf("an")); //1
console.log(fruit.indexOf("q")); //-1
console.log(fruit.slice(2, 6)); //(including ,upto)
console.log(fruit.replace("ban", 123));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split("")); //split by character
console.log(fruit.split(",")); //splitby comma

//Arrays

let fruitss = ["bbanan", "apple", "orange", "Kiwi"];
fruitss = new Array("bbanan", "apple", "orange", "Kiwi");

//alert(fruitss[1]) //access value using index

fruitss[0] = "peer";
console.log(fruitss);

for (let o = 0; o < fruitss.length; o++) {
  console.log(fruitss[o]);
}
console.log("to string", fruitss.toString());

console.log(fruitss.join(" - ")); //peer - apple - orange - Kiwi

console.log(fruitss.pop(), fruitss); //pop last elemnent

console.log(fruitss.push("gauva"), fruitss); // push to last

fruitss[4] = "dawdwa";
console.log(fruitss); //same as push

fruitss.shift();
console.log(fruitss); // remove first element  from array
fruitss.unshift("dfg");
console.log(fruitss); //add first element from array

let vege = ["brinj", "potato", "broc"];

let alls = fruitss.concat(vege); //combine all array
console.log(alls);
console.log(alls.slice(1, 4));
console.log(alls.reverse());
let sNum = [5, 10, 2, 25, 2, 43, 5, 6, 7];
console.log(
  sNum.sort(function (a, b) {
    return a - b;
  })
); // ascending

console.log(
  sNum.sort(function (a, b) {
    return b - a;
  })
); // descending
console.log(fruitss.sort());

let emptyarrya = new Array();

for (let i = 0; i < 10; i++) {
  emptyarrya.push(i);
}
console.log(emptyarrya);

//objects in Javascript
//dictionaries in python

let student = { first: "gokul", 
            last: "ravikumar",
            age: 23,
            height: 170,
            studentInfo: function(){
              return this.first+"\n"+this.last +"\n"+this.age
            }
           };
console.log(student.first);
console.log(student.last);
student.first = "rose"
console.log(student.first)
student.age++
console.log(student.age)
console.log(student.studentInfo())

var age = prompt('whta is your age') ;//let won't work for prompt as we expected ;
let testprompt = prompt('prompt testing') // but let is working fine
//conditionals , control flows (if else)
if ((age>=18)&&(age<=35)){
  stats = 'Target demo'
  console.log(stats)
} else {
  stats = 'not my target audience'
  console.log(stats)
}

//Switch Statements
//differentiate between weekday and weekend 
//day -0 --> sunday --weekend
//5->friday --weekend
//day -6 --> saturday --weekend
 //day -4 -->thursaday --> weekday  

switch (6){
  case 0:
    text = 'weekend';
    break;
  case 5:
    text = 'weekend'
    break
  case 6:
    text = 'weekend' 
    break
  default:
    text = 'weekday'
}
console.log(text)