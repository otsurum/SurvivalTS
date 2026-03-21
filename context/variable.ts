let x = 1;
x = 2;

let x_2;
x_2 = 1;

const y = 2;
// y = 2; // error


const obj = { a: 1, };
// obj = { a: 2 }; // error
obj.a = 2; // ok

const array = [1, 2];
// array = [2, 4]; // error
array.push(3); // ok

function test() {
    var x = 1;
    var x = 2; // 許される
    console.log(x); // 2

    // constも同様にredeclared
    let x_2 = 1;
    // let x_2 = 3; // error
}