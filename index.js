//'const' is not about IMMUTABILITY (ability to change) - it's about NO  REASSIGNMENT.
// OBJECTS can change.  PRIMITIVES cannot.
const me = {};
//I CANNOT REASSIGN 'me'
//me = "19";

//I CAN reassign the VALUE of keys inside of 'me'.
me.name = "Jermell";

const someone = {
  animal: "wolf",
  weight: 155,
  others: {
    bear: "Boogie",
    Moose: "Sam"
  }
};

someone.animal = "wolf";
someone.occupation = "deer";
console.log(someone.others.bear);
