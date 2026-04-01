let box: { width: number; height: number };

box = { width: 100, height: 199 };
// box = { width: "", height: true } // error
// box = { width: 100 } // error

type Box = {
    width: number;
    height: number;
};

let box2: Box;

let calculator2: {
    sum(x: number, y: number): number;
};

calculator2 = {
    sum(x, y) {
        return x + y;
    }
};

let calculator3: {
    sum: (x: number, y: number) => number;
};

let box3: object;
box3 = { width: 100, height: 400 };
// box3.width; // error