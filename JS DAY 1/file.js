let a = 2;
b = a; //copy by value

// console.log(a === b);
b = 3;
console.log(a);
console.log(b);

let abir = {
  name: "abir",
  age: 20,
};

// reference type

let sudip = abir; //copy by reference
//sudip and abir -> same object || common position in dono ka same ghar hai
sudip.name = "sudip";
console.log(sudip);
console.log(abir);
