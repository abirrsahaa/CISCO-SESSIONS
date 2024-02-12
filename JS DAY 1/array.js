let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

// returns array of the first two users
let someUsers = users.filter((abir) => abir.id < 3);
users.map((get) => (get.name = "abir"));
console.log(users);

console.log(someUsers); // 2
