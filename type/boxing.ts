const str = "aaa" // リテラル、プリミティブ
const strObject = new String(str); // オブジェクト
// const strObject: String = ""
strObject.length; // 3
strObject.toUpperCase(); // "AAA"

const booleanLiteral = true;
const booleanObject = new Boolean(booleanLiteral);
// const bool: Boolean = false;

const numberLiteral = 12;
const numObject = new Number(numberLiteral);
// const num: Number = 0;
// const numberLiteral2: number = numObject; // error, Literal <- Objectの代入はできない。　Object <- Literalはできる(多分)

const symbolObject = Symbol("foo");
// const sym: Symbol = Symbol();

const bigIntLiteral: bigint = 234n;
const bigIntObject = BigInt(bigIntLiteral);
// const big: BigInt = 10n;