// object: プリミティブはNG
let objectC: object;

objectC = { a: 1 }; // OK
// objectC = 1; // Error


// Object: null, undefined以外はOK
let objectD: Object;

objectD = { a: 1 }; // OK
objectD = 1; // OK