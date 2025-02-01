console.log("log 1");

setTimeout(() => console.log("log tmeout 100"), 100);

setTimeout(() => console.log("log timout 0"), 0);

console.log("log 1 - bis");

queueMicrotask(() => console.log("log microtask"));

/**
 * @param {number} time
 */
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
}

await wait(200);

console.log("temps 3");

const animals = [
  { name: "Figaro", specie: "cat" },
  { name: "Cow-Boy", specie: "dog" },
  { name: "Mei", specie: "cat" },
  { name: "Pazu", specie: "cat" },
  { name: "Charlot", specie: "horse" },
  { name: "Taca", specie: "cat" },
  { name: "Maya", specie: "dog" },
  { name: "Petit Tonnerre", specie: "horse" }
];

const names = animals.map((animal) => {
    return animal.name;
})

console.log("names: ", names);

const cats = animals.filter((animal) => {
        return animal.specie === "cat";
})

// exactly the same as above but for dogs => simplified synthaxe because there is only one instruction 
// in the callback function => implicitly return animal.specie === "dog" without specify the word "return"
const dogs = animals.filter((animal) => animal.specie === "dog")

console.log("cats: ", cats);
