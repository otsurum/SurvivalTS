let obj: {
    readonly foo: number;
    readonly foo2: {
        bar: number;
        readonly baz: number;
    };
}
obj = { foo: 1, foo2: { bar: 2, baz: 3 } };
// obj.foo = 2; // error
// obj.foo2 = { bar: 3, baz: 4 }; // error
obj.foo2.bar = 3;


let obj2: Readonly<{
    a: number;
    b: number;
}>;

// obj2.a = 1; // error
// obj2.b = 2; // error

// const: 変数そのものへの再代入を禁止する
// readOnly: プロパティへの再代入を禁止する