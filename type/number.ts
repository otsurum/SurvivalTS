0.1 === .1 // true
5.0 === 5. // true

0b0111 // 7
0o012 // 10
0xfff // 4095

100_000 // _で区切れる


// 以下はエラー
// _100
// 100_
// 0_.1
// 0._1

// 数値リテラルの指定
5..toString();
(5).toString();

// Nan
parseInt("abc") // NaN
const nan = parseInt("aaa");
Number.isNaN(nan); // true

// console.log(NaN === NaN); // false, error

0.1 + 0.3 === 0.3; // false
0.5 + 0.25 === 0.75; // true

110 * 1.1; // 121.00000000000001
(110 * 11) / 10 === 121; // true, 小数点の計算は整数同士の乗算に直して補正をかける(10^nでわる)
(101 * 11) / 10; // 111.1 // 少数計算誤差がでる

Math.round(101 * 10 / 10); // 101
