// const obj = { a: 1, b: 2 };
// const obj2 = { ...obj, c: 3 };
// const obj2 = { z: 0, ...obj, c: 3 };

// const backup = { ...obj };
// backup.a = 10;
// obj.a = 1;

const objobj = { a: 1, b: { c: 2 } };
const backup = { ...objobj };

objobj.b.c = 100;
// backup.b.c == 100

const user = { id: 1, name: "John", password: "secret" };
// passwordを除いたプロパティだけを抜き取る
const { password, ...safeuser } = user;
