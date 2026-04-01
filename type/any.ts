let value: any;
value = 42;
value = "Hello, world!";
value = true;

function hello(name) {
    console.log(`Hello, ${name.toUpperCase()}`)
}

hello(1);

// 型制限の抑制を目的としている