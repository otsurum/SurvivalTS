const s1: symbol = Symbol("foo");
const s2: symbol = Symbol("foo");
s1 === s1; // true
// s1 === s2; // false

JSON.stringify(Symbol("hoge")); // undefined
JSON.stringify({
    x: Symbol("hoge"),
    y: "hogehoge",
    [Symbol("z")]: "hogehogehoge"
}); // {"y": "hogehoge"}

