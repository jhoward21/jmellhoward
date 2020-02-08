const me = {
  age: 19,
  name: "Jermell",
  occ: "dev"
};

console.log(me.age);

console.log(me["age"]);

let keyINeed = "age";

console.log(me.keyINeed);

//I must use BRACKET NOTATION if I need to use a VARIABLE for my key.
console.log(me[keyINeed]);
console.log(me.keyINeed);
