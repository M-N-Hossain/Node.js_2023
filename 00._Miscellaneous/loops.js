const rocks = [
  { name: "Pet rock", age: 2 },
  { name: "Led Zeppelin", age: 50 },
  { name: "Dwayne Johnson", age: 47 },
  { name: "Neptune", age: 100 },
];

// loop methods: map, filter, find, reduce, sort, forEach

const rocksAgedOneYear = rocks.map((rock) => ({ ...rock, age: rock.age + 1 }));

console.log(rocksAgedOneYear);

const evenAgedRocks = rocks.filter((rock) => rock.age % 2 === 0);

console.log(evenAgedRocks);
