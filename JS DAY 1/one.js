// // let userName = "John";

// function showMessage() {
//   let message = "Hello, " + userName;
//   console.log(message);
// }

// // function expression

// // function is basically a value
// // console.log(showMessage); // shows the function code

// // showMessage();

// // function
// // function expression
// // function abir() {
// //   console.log("Abir");
// // }

// let a = 2;
// statement;

// // function statement
// let b = function om() {
//   console.log("om");
// };

// let c = function () {
//   alert("Hello");
// };
// //  is known as anonymous function
// b();

// java script ksbhi bhi pehle compile nhi karta
// pehle memniry allocation hoga uske bad code run hoga
// pehle yeh karega scan
// variables jitne bhi hai usko memory allocate karega and undefined karega
// functions ke case mai yeh pura ka poura code hi allocate kardega
// sayHi("John");

// function sayHi(name) {
//   console.log(`Hello, ${name}`);
// }

// // dusra code
// sayHi("John");

// sayhi:undefined
// let sayHi = function (name) {
//   console.log(`Hello, ${name}`);
// };

// converting to arrow function
// omitting the function keyword
// adding => after the arguments
// let sayhi = (name) => {
//   console.log(`Hello, ${name}`);
// };

// scioping in js
// {
//   vgftfty;
// }

var abir = "cricket";

function showMessage(name) {
  let message = "Hello, I'm JavaScript!"; //local variable
  console.log(abir);
  console.log(name);

  function show() {
    console.log("show");
    console.log(abir);
  }
}

showMessage("abir"); // Hello, I'm JavaScript!

console.log(abir); // <-- Error! The variable is local to the function

// callback function
function cricket(a, b) {
  console.log("i am playing cricket " + a);
  b();
}

cricket("with abir", function b() {
  console.log("i am playing cricket with virat kohli ");
});

// use case
// a,b,c,d
function a(b, c, d) {
  console.log(jbhvhjf);
  b(c, d);
}
function b(c, d) {
  c(d);
}

// callback hell
