// let user = {
//   name: "John",
//   age: 30,
// };

// let user = {
//   "name": "abir",
//   "age": 20,
// };
// //  a pair of key value pairs !!!!
// console.log(user.name);
// console.log(user);

// user.isAdmin = true;

// console.log(user);

// alert(user.name);
// alert(user.age);

// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true,
// };

// console.log(user["likes birds"]);
// user["hobby"] = "cricket";
// console.log(user);

// //   now how to access the third property
// // use of square brackets --- mast method

// // how to take key in variable and accessing in square bracket as dot notation is not possible
// let user = {
//   name: "John",
//   age: 30,
// };

// let key = prompt("What do you want to know about the user?", "name");

// // access by variable
// alert(user[key]); // John (if enter "name")

// // computating on the go key of objects

// let fruit = prompt("Which fruit to buy?", "apple");

// // fruit=apple
// //[]advantage
// let bag = {
//   [fruit]: 5,
// };

// alert(bag.apple);

// // the in property

// let user = { age: undefined };

// console.log(age[user]);

// // why to use in property if dot operator can solve the issue

// let obj = {
//   test: undefined,
// };

// alert(obj.test); // it's undefined, so - no such property?

// alert("test" in obj); // true, the property does exist!

// //   for in loop

// for in loop

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   // keys
//   console.log(key); // name, age, isAdmin
//   // values for the keys
//   console.log(user[key]); // John, 30, true
// }

//   copying of objects

// // first what is reference and copy by value

// let user = { name: "John" };

// let admin = user;

// admin.name = "Pete"; // changed by the "admin" reference

// alert(user.name); // 'Pete', changes are seen from the "user" reference

// // comparing
// // 1
// let a = {};
// let b = a; // copy the reference

// alert(a == b); // true, both variables reference the same object
// alert(a === b); // true

// // 2
// let a = {};
// let b = {}; // two independent objects

// alert(a == b); // false

// // cloning of objects the hard way

// let user = {
//   name: "John",
//   age: 30,
// }; //bh1

// let clone = {}; // the new empty object  bh2

// // let's copy all user properties into it
// for (let key in user) {
//   clone[key] = user[key];
// }
// // clone{
// //     name:"John",
// //     age:30
// // }

// // // now clone is a fully independent object with the same content
// clone.name = "Pete"; // changed the data in it

// console.log(user); // still John in the original object
// console.log(clone); // Pete in the clone

// //   cloning of objects the easy way
// using Object.assign
// Object.assign(clone,user);//dest src
// // bh2 bh1
// let user = { name: "John" };
// let jiya ={name age hobby}

// Object.assign(user, { name: "Pete" });

// rest operator

// alert(user.name); // now user = { name: "Pete" }

// constructor functions

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");
// console.log(user);

// alert(user.name); // Jack
// alert(user.isAdmin); // false

// //   object destructuring

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// // // { sourceProperty: targetVariable }
// let { width: w, height: h, title } = options;

// console.log(title);

// let w=options.width;
// let h=options.height;
// let title=options.title;

// // width -> w
// // height -> h
// // title -> title

// alert(title); // Menu
// alert(w); // 100
// alert(h); // 200

// rest property

// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100,
// };

// let { title, ...rest } = options;

// let abir = {};
// Object.assign(abir, { title: "tripura", ...options });
// console.log(abir);

// console.log(title);
// console.log(abir);
// console.log(abir.height);

// // now title="Menu", rest={height: 200, width: 100}
// alert(rest.height); // 200
// alert(rest.width); // 100
