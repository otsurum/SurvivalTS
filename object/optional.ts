type Size = {
    width?: number;
}
const size: Size = {};
const size2: Size = { width: undefined };
// const sizeNull: Size = { width: null }; // error

const xy: { x: number, y: number } = { x: 1, y: 2 };
let onlyX: { x: number };
onlyX = xy;
onlyX.x; // ok
// onlyX.y; // error