const book = { title: "Hoge" };
const title = book?.title;

const book2 = { author: { email: "hoge@example.com" } };
const email = book2?.author?.email;
// 値がnullまたはundefinedの場合、emailはundefinedになります

// const increment = undefined;
// const result = increment?.(); // undefined

// const increment = (n) => n + 1;
// const result = increment?.(1); // result = 2

const books = undefined
const title2 = books?.[0];

let book3: undefined | {title: string};
const title3 = book3?.title // string | undefined
// title3 = book3 === null || book3 === void 0 ? void 0 : book3.title;