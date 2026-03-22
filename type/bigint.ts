const bigIntValue: bigint = 100n;
const bigIntVal2: bigint = BigInt(200); // BigIInt("9000000")

// 2 + 3n; // error
BigInt(2) + 3n; // OK
JSON.stringify(12n);